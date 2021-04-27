import React from "react"
export default function About_Card() {
       return (
        <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="accordion" id="accordionExample1">
            <div className="card card-sm card-body border-light mb-0"><a data-target="#panel-1" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">I’m looking for a Parking…</span> <span className="icon"><span className="fas fa-plus" /></span></a>
              <div className="collapse" id="panel-1">
                <div className="pt-3">
                  <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body border-light mb-0"><a data-target="#panel-2" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">How does it work?</span> <span className="icon"><span className="fas fa-plus" /></span></a>
              <div className="collapse" id="panel-2">
                <div className="pt-3">
                  <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body border-light"><a data-target="#panel-3" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">Licenses</span> <span className="icon"><span className="fas fa-plus" /></span></a>
              <div className="collapse" id="panel-3">
                <div className="pt-3">
                  <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mb-4 mt-6">Would you like to work with us?</p>
          <p className="text-center"><a className="btn btn-primary animate-up-2">Contact us.</a></p>
        </div>
      </div>
    );
}