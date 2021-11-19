import { Button } from "@material-ui/core";
import React from "react";

export default function Dashboard() {
  const [password, setPassword] = React.useState("muhammadsav");
  const prompt = 
  const goToDashboard = () => {
    if (prompt === password) {
      alert("All good");
    } else {
      alert("Go f%$# off");
    }
  };
  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "200px" }}>
      <Button
        onClick={goToDashboard}
        style={{ color: "black" }}
        variant="outlined"
      >
        Go to Dashboard via here
      </Button>
      <section>
        <div class="square_box box_three"></div>
        <div class="square_box box_four"></div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-12">
              <div
                class="alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                role="alert"
                data-brk-library="component__alert"
              >
                <button
                  type="button"
                  class="close font__size-18"
                  data-dismiss="alert"
                >
                  <span aria-hidden="true">
                    <i class="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
                  </span>
                  <span class="sr-only">Close</span>
                </button>
                <i class="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
                <strong class="font__weight-semibold">Warning!</strong> Only
                admins are allowed to user Dashboard
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
