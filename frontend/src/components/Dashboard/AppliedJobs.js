import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function AlertDialog({ handleClose, jobs }) {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port ? `:${window.location.port}` : "";
  const mainUrl = `${protocol}//${hostname}${port}`;

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions sx={{ p: 0, m: 0 }}>
          <p
            onClick={handleClose}
            className="mt-4 mr-4 cursor-pointer hover:bg-slate-200 p-2 rounded-full transition-all"
          >
            <CloseIcon></CloseIcon>
          </p>
        </DialogActions>
        <DialogContent>
          <h1 className="text-2xl flex absolute top-10 w-80 ml-2 font-semibold text-slate-800 border-slate-600">
            Saved Jobs
          </h1>
          <div className="mt-4">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-row p-4 bg-purple-200 m-2 rounded-sm items-center mr-6 pr-8"
                >
                  <p className="mr-4 font-bold text-lg">{index}.</p>
                  <p className="font-semibold">{job}</p>
                  <a
                    href={mainUrl + `/job/${job}`}
                    className="absolute right-2 bg-white hover:scale-105 text-purple-900 rounded-full p-2 mr-5 border-purple-200 border-2 cursor-pointer"
                  >
                    <NavigateNextOutlinedIcon></NavigateNextOutlinedIcon>
                  </a>
                </div>
              ))
            ) : (
              <>
                <p className="text-center w-80 p-4 font-mono text-slate-600">
                  You haven't applied to any Job yet !
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
