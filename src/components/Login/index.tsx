import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import React from "react";
import { useHistory } from "react-router";

import { Form, Field } from "react-final-form";

import Google from "../../assets/icons/google";

import style from "./style.module.css";
import PATH from "../../PATH";

const renderTextField: React.FC<any> = ({ ...props }) => {
  console.log(props);

  return (
    <TextField
      name={props.input.name}
      value={props.input.value}
      type={props.input.type}
      onChange={props.input.onChange}
      {...props}
      variant="outlined"
    />
  );
};

const Login: React.FC = () => {
  const history = useHistory();

  return (
    <Form
      render={() => (
        <Paper className={style.form}>
          <Typography className={style.header} align="center" variant="h5">
            Вход
          </Typography>

          <Button
            className={style.item + " " + style.google_btn}
            variant="outlined"
            startIcon={<Google />}
            onClick={() => {}}
          >
            Войти через Google
          </Button>

          <div className={style.divider}>
            <span className={style.divider_line}></span>
            <div className={style.divider_text}>или</div>
            <div className={style.divider_line}></div>
          </div>

          <Field className={style.item} name="email" type="email" label="Почта" component={renderTextField} />
          <Field className={style.item} name="password" type="password" label="Пароль" component={renderTextField} />

          <Button className={style.item} disableElevation variant="contained" color="primary" onClick={() => {}}>
            Войти
          </Button>

          <Button
            className={style.item + " " + style.registration_btn}
            disableElevation
            variant="outlined"
            color="primary"
            onClick={() => {
              history.replace(PATH.REGISTRATION);
            }}
          >
            Зарегистрироваться
          </Button>
        </Paper>
      )}
      onSubmit={() => {}}
    />
  );
};

export default Login;
