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

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  return (
    <Form
      render={({ handleSubmit, invalid }) => (
        <Paper className={style.form} component="form" onSubmit={handleSubmit}>
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

          <Button
            className={style.item}
            disableElevation
            disabled={invalid}
            variant="contained"
            color="primary"
            type="submit"
          >
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
      onSubmit={onSubmit}
    />
  );
};

export default Login;
