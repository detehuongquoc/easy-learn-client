import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import AlertMessage from "../layout/AlertMessage";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DoneLernVocabulary,
  getSingleProduct,
  singleProductSelector,
} from "../../store/reducers/vocabularySlice";

const LernForm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const singleVocabulary = useSelector(singleProductSelector);
  const [editVocabularyForm, setEditVocabularyForm] = useState({});
  const [alert, setAlert] = useState(null);
  const [checkSubmit, setCheckSubmit] = useState(false);

  useEffect(() => {
    if (singleVocabulary) {
      setEditVocabularyForm({
        ...singleVocabulary,
        keyword: "",
        means: singleVocabulary.means,
        check: singleVocabulary.keyword,
      });
    }
    console.log(check);
  }, [singleVocabulary]);
  const { keyword, means, check, status, lernday } = editVocabularyForm;
  const onChangeEditVocabulary = (event) => {
    setEditVocabularyForm({
      ...editVocabularyForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheck = () => {
    if (keyword == check) {
      setAlert({
        type: "success",
        message: "Congrats, that's the correct answer",
      });
      setTimeout(() => setAlert(null), 2000);
      setCheckSubmit(true);
    } else {
      setAlert({
        type: "error",
        message: "That is not the correct answer",
      });
      setTimeout(() => setAlert(null), 2000);
    }
  };
  const editVocabulary = (event) => {
    event.preventDefault();
    try {
      const param = {
        id,
        editVocabularyForm: {
          ...editVocabularyForm,
          status: status + 1,
        },
      };
      if (keyword && means) {
        dispatch(DoneLernVocabulary(param));
      } else {
        console.log("truong trong");
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickOpen = () => {
    dispatch(getSingleProduct(id));
    setEditVocabularyForm({
      ...singleVocabulary,
      keyword: "",
      means: singleVocabulary.means,
      check: singleVocabulary.keyword,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setEditVocabularyForm({});
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
        style={{ height: 30 }}
      >
        Lern Vocabulary
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{
          minWidth: "200px",
        }}
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ textAlign: "center", textTransform: "uppercase" }}
        >
          Lern Vocabulary
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={editVocabulary}>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              style={{
                padding: "10px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {means}
            </Typography>
            <AlertMessage info={alert} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                autoFocus
                margin="dense"
                label="What is keyword means?"
                type="text"
                fullWidth
                required="required"
                required
                name="keyword"
                value={keyword}
                onChange={onChangeEditVocabulary}
              />
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: "0 10px" }}
                onClick={handleCheck}
              >
                Check
              </Button>
            </div>

            <DialogActions>
              <Button
                color="primary"
                type="submit"
                disabled={checkSubmit ? "" : "false"}
              >
                Done
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LernForm;
