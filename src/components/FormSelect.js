import React, { Component } from 'react';
import styled from 'styled-components'


class FormSelect extends Component {
    render() {
        return (
            <div class="col-sm-3 offset-sm-1">
                <form>
                    <div class="form-group">
                        <label for="publisherFormControlSelect1">Publisher</label>
                        <select class="form-control" id="publisherFormControlSelect1">
                        <option>{this.props.publisher}</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    };
}

export default FormSelect;
