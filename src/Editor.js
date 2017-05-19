/**
 * Created by Denis on 18.05.2017.
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom/es';
import {addItem} from './actions';

class Editor extends Component{
    constructor(props){
        super(props);

        this.submit = (e) => {
            e.preventDefault();

            let cool = true, refs = Object.entries(this.refs), item;
            if(refs.length) item = refs.reduce((obj, entrie) => {
                cool &= entrie[1].id == 'descriptionArea' || !!entrie[1].value.length;
                obj[entrie[0]] = entrie[1].value;
                return obj;
            }, {});

            if(cool) {
                props.addItem(item);
                props.history.push("/");
            }
        }
    }
    render(){
        return (<div className="container-fluid">
            <div className="row m-v-15">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="nameInput">Название</label>
                        <input type="text" ref="name" className="form-control" id="nameInput" required placeholder="Введите название" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countryInput">Страна</label>
                        <input type="text" ref="country" className="form-control" id="countryInput" required placeholder="Введите страну" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cityInput">Город</label>
                        <input type="text" ref="city" className="form-control" id="cityInput" required placeholder="Введите город" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organizationInput">Организация</label>
                        <input type="text" ref="organization" className="form-control" id="organizationInput" required placeholder="Введите организацию" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionArea">Описание</label>
                        <textarea id="descriptionArea" className="form-control" ref="description"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" style={{marginRight: 15}}>Сохранить</button>
                        <Link to="/" className="btn btn-default">Отмена</Link>
                    </div>
                </form>
            </div>
        </div>);
    }
};

export default withRouter(connect(null, dispatch => {return {addItem: (item) => dispatch(addItem(item))}})(Editor));