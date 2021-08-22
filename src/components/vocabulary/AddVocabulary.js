import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllVocabulary,
  NewVocabulary,
} from "../../store/reducers/vocabularySlice";

const AddVocabulary = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [addVocabularyForm, setAddVocabularyForm] = useState({
    keyword: "",
    means: "",
    example: "",
    url: "",
  });
  const { keyword, means, example, url } = addVocabularyForm;
  const onChangeAddVocabulary = (event) => {
    setAddVocabularyForm({
      ...addVocabularyForm,
      [event.target.name]: event.target.value,
    });
    console.log(addVocabularyForm);
  };
  const addVocabulary = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(NewVocabulary(addVocabularyForm));
      // if (isAuthenticated === false) {
      //   setAlert({
      //     type: "error",
      //     message: "Missing username and/or password",
      //   });
      //   setTimeout(() => setAlert(null), 3000);
      // }
      setOpen(false);
      setAddVocabularyForm({
        keyword: "",
        means: "",
        example: "",
        url: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          position: "fixed",
          right: 60,
          bottom: 60,
          borderRadius: "10px",
        }}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        startIcon={<FaPlus />}
      >
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ textAlign: "center", textTransform: "uppercase" }}
        >
          Add new vocabulary
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            When adding new vocabulary, you should add pictures and examples to
            make it easier to remember
          </DialogContentText>
          <form noValidate autoComplete="off" onSubmit={addVocabulary}>
            <TextField
              autoFocus
              margin="dense"
              label="Keyword"
              type="text"
              fullWidth
              required
              name="keyword"
              onChange={onChangeAddVocabulary}
              value={keyword}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Meaning of the word"
              type="text"
              fullWidth
              required
              name="means"
              value={means}
              onChange={onChangeAddVocabulary}
            />
            {/* <TextField
              autoFocus
              margin="dense"
              label="For example"
              type="text"
              fullWidth
              name="example"
              value={example}
              onChange={onChangeAddVocabulary}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Url Image"
              type="text"
              fullWidth
              name="url"
              value={url}
              onChange={onChangeAddVocabulary}
            /> */}
            <DialogActions>
              <Button color="primary" type="submit">
                Submit
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

export default AddVocabulary;
