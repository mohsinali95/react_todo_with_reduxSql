import React,{ Component} from "react"
import {connect} from "react-redux"
import {addItem,deleteItem,editItem,GetItems} from "./store/action/action"

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            edit : null,
            editText: '',
            text: ''
        }
    }
    handleDelete(ind){
        this.props.isDeleteItem(ind)
    }
    componentDidMount(){
        this.props.isGetItems()
    }
    enterList(){
        let obj = {
            list: this.state.text
        }
        this.setState({
            text: ''
        })
        this.props.isAddItem(obj)
    }
    handleChangeList(ev){
        this.setState({
            text: ev.target.value
        })
    }
    changeEdit(ev){
        this.setState({
            editText: ev.target.value
        })
    }
    applyEdit(id,text){
        this.props.isEditItem(id,text);
        this.setState({
            edit: null
        })
    }
    render(){
        return(
        <div className="main-div">
            <div className="col-md-12 pt-5 pb-5 top-color">
                <div className="container ">
                    <div className="row" >
                        <div className="col-sm-2 text-light text-center">
                            <label className="col-12" htmlFor="" >Enter Item:</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <input className="col-12" type="text" value={this.state.text} onChange={this.handleChangeList.bind(this)}   />
                        </div>
                        <div className="col-md-4 text-center">
                            <button className="btn btn-primary float-left" onClick={this.enterList.bind(this)}>Enter Item</button>
                        </div>
                    </div>
                </div>
            </div>
            {(this.props.items.length > 0) ?
                    <div className="lists-part">
                        {this.props.items.map((val, ind) => {
                            return (
                                <div key={ind} className="container">

                                    <div className="row">
                                        <div className="col-md-12 mt-2 box">
                                            {(this.state.edit === ind) ?
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <input type="text" className="col-sm-12"  onChange={this.changeEdit.bind(this)} />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <button className="btn btn-info float-right" onClick={this.applyEdit.bind(this,val.id,this.state.editText)} >Apply</button>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <button className="btn btn-danger" onClick={()  => {this.setState({edit: null})}}>Cancel</button>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <p>{(1+ind)}) {val.list}</p>
                                                    </div>
                                                    <div className="col-sm-2 ">
                                                        <button className="btn btn-info float-right" onClick={() => { this.setState({ edit: ind }) }}>Edit</button>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this, val.id)}>Delete</button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    :
                    <p>No Item</p>
                }
                
        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        items: state.root.items,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        isAddItem: (obj) =>{
            dispatch(addItem(obj))
        },
        isDeleteItem: (ind) =>{
            dispatch(deleteItem(ind))
        },
        isEditItem: (id,text) =>{
            dispatch(editItem(id,text))
        },
        isGetItems: () =>{
            dispatch(GetItems())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);