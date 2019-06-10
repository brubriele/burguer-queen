import React from 'react';
import './FormBoxStyle.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
const firebaseAppAuth = firebase.auth();


class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            tipo: ""
        };
    }

    handleChange = (event, element) => {
        const newState = this.state;
        newState[element] = event.target.value
        this.setState(newState);
    }

    createUser = () => {
        this.props.createUserWithEmailAndPassword(this.state.email, this.state.senha);
    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register
          </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input value={this.state.nome}
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" onChange={(e) => this.handleChange(e, "nome")} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={this.state.email} type="text" name="email" className="login-input" placeholder="Email" onChange={(e) => this.handleChange(e, "email")} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input value={this.state.senha}
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" onChange={(e) => this.handleChange(e, "senha")} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Tipo</label>

                        <select onChange={(e) => this.handleChange(e, "tipo")}>
                            <option value="">--selecione--</option>
                            <option>SALÃO</option>
                            <option>COZINHA</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this.createUser}>Register</button>
                </div>
            </div>
        );
    }
}


export default withFirebaseAuth({
    firebaseAppAuth,
})(RegisterBox);