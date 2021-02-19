import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Field, Form } from "react-final-form";
import { Redirect, useHistory } from "react-router-dom";
import PATH from "../../PATH";

import style from "./style.module.css";

type Props = {
  isAuthenticated: boolean;

  register(nickname: string, email: string, password: string): void;
};

const Registration: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  if (props.isAuthenticated) {
    return <Redirect to={PATH.ROOMS} />;
  }

  const onSubmit = (values: any) => {
    props.register(values.nickname, values.email, values.password);
  };

  return (
    <Form
      render={({ handleSubmit }) => (
        <Paper className={style.form} component="form" onSubmit={handleSubmit}>
          <Typography className={style.header} align="center" variant="h5">
            Регистрация
          </Typography>

          <Field className={style.item} name="nickname" type="text" label="Имя" component={renderTextField} />

          <Field className={style.item} name="email" type="email" label="Почта" component={renderTextField} />

          <Field className={style.item} name="password" type="password" label="Пароль" component={renderTextField} />

          <Button className={style.item} type="submit" disableElevation variant="contained" color="primary">
            Зарегистрироваться
          </Button>

          <Button
            className={style.item + " " + style.registration_btn}
            disableElevation
            variant="outlined"
            color="primary"
            onClick={() => {
              history.replace(PATH.LOGIN);
            }}
          >
            Войти
          </Button>
        </Paper>
      )}
      onSubmit={onSubmit}
    />
  );
};

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

export default Registration;
