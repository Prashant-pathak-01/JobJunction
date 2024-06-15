import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import ApplicantInfo from "./applicantInfo";
export default function FormDialog({ handleClose, applicants }) {
  return (
    <React.Fragment>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "100%" } }}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogActions sx={{ p: 0, m: 0 }}>
          <p
            onClick={handleClose}
            className="mt-4 mr-4 cursor-pointer hover:bg-slate-200 p-2 rounded-full transition-all"
          >
            <CloseIcon></CloseIcon>
          </p>
        </DialogActions>
        <DialogTitle>Applicants</DialogTitle>
        <DialogContent>
          <div>
            {applicants.map((email) => (
              <ApplicantInfo email={email} sx={{ w: 2 / 3 }}></ApplicantInfo>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
