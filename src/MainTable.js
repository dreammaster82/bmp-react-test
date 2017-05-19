/**
 * Created by Denis on 18.05.2017.
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Link, withRouter} from 'react-router-dom/es';

class MainTable extends Component{
    render(){
        const columns = [
            {accessor: 'name', Header: 'Название', filterable: true},
            {accessor: 'place', Cell: row => {
                return `${row.original.city}, ${row.original.country}`;
            }, Header: 'Место создания', filterable: true, filterMethod: (filter, row) => {
                return row._original.city.startsWith(filter.value) || row._original.country.startsWith(filter.value);
            }},
            {accessor: 'organization', Header: 'Организация'},
            {accessor: 'description', Header: 'Описание'}
        ]
        return (<div className="container-fluid">
            <div className="row m-v-15"><Link to="/edit" className="btn btn-primary">Добавить элемент</Link></div>
            <div className="row m-v-15">
                <ReactTable
                    data={this.props.items}
                    columns={columns}
                    defaultPageSize={5}
                    showPagination={true}
                />
            </div>
        </div>);
    }
}

export default withRouter(connect(state => {return {items: state.bmp}})(MainTable));