import React from "react";

export default function Support_icon_card() {


return(
    <div className="row">

    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
      {" "}
      <a className="card text-center shadow-soft border-light animate-up-3">
        <div className="card-body p-5">
          <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
            <span className="fas fa-clipboard-list" />
          </div>
          <h6 className="text-gray mb-0">Requirements</h6>
        </div>
      </a>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
      {" "}
      <a className="card text-center shadow-soft border-light animate-up-3">
        <div className="card-body p-5">
          <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
            <span className="fas fa-receipt" />
          </div>
          <h6 className="text-gray mb-0">Licensing</h6>
        </div>
      </a>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
      {" "}
      <a className="card text-center shadow-soft border-light animate-up-3">
        <div className="card-body p-5">
          <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
            <span className="fas fa-code-branch" />
          </div>
          <h6 className="text-gray mb-0">Troubleshooting</h6>
        </div>
      </a>
    </div>
    <div className="col-12 col-md-6 col-lg-3">
      {" "}
      <a className="card text-center shadow-soft border-light animate-up-3">
        <div className="card-body p-5">
          <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
            <span className="fab fa-cloudversify" />
          </div>
          <h6 className="text-gray mb-0">Team and Cloud</h6>
        </div>
      </a>
    </div>

  </div>
);


//   let support_icon_card_array = [
//     {
//       iconclass: "fas fa-clipboard-list",
//       cardtitle: "Requirements",

//     },
//     {
//         iconclass: "fas fa-receipt",
//         cardtitle: "Licensing",

//       },
//       {
//         iconclass: "fas fa-code-branch",
//         cardtitle: "Troubleshooting",

//       },
//       {
//         iconclass: "fab fa-cloudversify",
//         cardtitle: "Team and Cloud",

//       },

//   ];
//   return support_icon_card_array.map((card) => {
//     return (
//       <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
//         {" "}
//         <a className="card text-center shadow-soft border-light animate-up-3">
//           <div className="card-body p-5">
//             <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
//               <span className={card.iconclass}/>
//             </div>
//             <h6 className="text-gray mb-0">{card.cardtitle}</h6>
//           </div>
//         </a>
//       </div>
//     );
//   });
}
