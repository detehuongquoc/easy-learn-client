import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditVocabulary,
  getSingleProduct,
  singleProductSelector,
} from "../../store/reducers/vocabularySlice";

const EditVocabularyForm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const singleVocabulary = useSelector(singleProductSelector);

  const [editVocabularyForm, setEditVocabularyForm] = useState({
    ...singleVocabulary,
  });
  useEffect(() => {
    if (singleVocabulary) {
      setEditVocabularyForm({
        ...singleVocabulary,
        keyword: singleVocabulary.keyword,
        means: singleVocabulary.means,
      });
    }
  }, [singleVocabulary]);
  const { keyword, means } = editVocabularyForm;
  const onChangeEditVocabulary = (event) => {
    setEditVocabularyForm({
      ...editVocabularyForm,
      [event.target.name]: event.target.value,
    });
    console.log(editVocabularyForm);
  };
  const editVocabulary = (event) => {
    event.preventDefault();
    try {
      const param = {
        id,
        editVocabularyForm,
      };
      if (keyword && means) {
        dispatch(EditVocabulary(param));
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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
        style={{ margin: 10, height: 30 }}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Edit Vocabulary
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={editVocabulary}>
            <TextField
              autoFocus
              margin="dense"
              label="Keyword"
              type="text"
              fullWidth
              required="required"
              name="keyword"
              onChange={onChangeEditVocabulary}
              value={keyword}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Meaning of the word"
              type="text"
              fullWidth
              required="required"
              required
              name="means"
              value={means}
              onChange={onChangeEditVocabulary}
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

export default EditVocabularyForm;
