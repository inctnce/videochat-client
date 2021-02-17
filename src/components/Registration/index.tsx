import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Form } from "react-final-form";
import { useHistory } from "react-router-dom";
import PATH from "../../PATH";

import style from "./style.module.css";

const Registration: React.FC = () => {
  const history = useHistory();

  return (
    <Form
      render={() => (
        <Paper className={style.form}>
          <Typography className={style.header} align="center" variant="h5">
            Регистрация
          </Typography>

          <TextField className={style.item} type="text" name="fname" variant="outlined" label="Имя" />

          <TextField type="email" className={style.item} variant="outlined" label="Почта" />

          <TextField className={style.item} type="password" variant="outlined" label="Пароль" />

          <Button className={style.item} disableElevation variant="contained" color="primary">
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
      onSubmit={() => {}}
    />
  );
};

export default Registration;
