import React from "react";

export default function AllSpacesCard() {
  let all_spaces_card_array = [
    {
      cardimg: "../assets/img/image-office.jpg",
      cardtitle:"Team Workspace",
      location:"California, USA",
      nearbyplace1:" Penny Market Street (15 mins walk)",
      nearbyplace2:"Museum Street (20 mins walk)",
      monthly:"300$",
      pepole:"24",
      sqft:"2000",

    },
    {
        cardimg: "../assets/img/cowork-office.jpg",
        cardtitle:"Coworking Workspace",
        location:"California, USA",
        nearbyplace1:" Penny Market Street (15 mins walk)",
        nearbyplace2:"Museum Street (20 mins walk)",
        monthly:"300$",
        pepole:"24",
        sqft:"2000",

      },
      {
        cardimg: "../assets/img/meeting-office.jpg",
        cardtitle:"Meeting Office",
        location:" London, Canary Wharf, UK",
        nearbyplace1:" Tour Market Street (15 mins walk)",
        nearbyplace2:"Museum Street (20 mins walk)",
        monthly:"50$",
        pepole:"2-4",
        sqft:"2000",

      },
      {
        cardimg: "../assets/img/lifestyle-office.jpg",
        cardtitle:"LifeStyle  space",
        location:"California, USA",
        nearbyplace1:" Penny Market Street (15 mins walk)",
        nearbyplace2:"Museum Street (20 mins walk)",
        monthly:"200$",
        pepole:"10-30",
        sqft:"500",

      },
      {
        cardimg: "../assets/img/conference-office.jpg",
        cardtitle:"Conference Room",
        location:"California, USA",
        nearbyplace1:" Penny Market Street (15 mins walk)",
        nearbyplace2:"Museum Street (20 mins walk)",
        monthly:"150$",
        pepole:"2-10",
        sqft:"1200",

      },
      {
        cardimg: "../assets/img/private-office.jpg",
        cardtitle:"Private Space",
        location:"California, USA",
        nearbyplace1:" Penny Market Street (15 mins walk)",
        nearbyplace2:"Museum Street (20 mins walk)",
        monthly:"100$",
        pepole:"1",
        sqft:"100",

      },
  ];
  return (
  all_spaces_card_array.map((card)=>{

    return(
        <div className="col-12 col-md-6">
        <div className="card border-light mb-4 animate-up-5">
          <a className="position-relative">
            <img
              src={card.cardimg}
              className="card-img-top rounded-xl p-2"
              alt="themesberg office"
            />
          </a>
          <div className="card-body">
            <a>
              <h4 className="h5">{card.cardtitle}</h4>
            </a>
            <div className="d-flex my-4">
              <i className="star fas fa-star text-warning" />{" "}
              <i className="star fas fa-star text-warning" />{" "}
              <i className="star fas fa-star text-warning" />{" "}
              <i className="star fas fa-star text-warning" />{" "}
              <i className="star fas fa-star text-light" />
              <span className="badge badge-pill badge-primary ml-2">4.0</span>
            </div>
            <ul className="list-group mb-3">
              <li className="list-group-item small p-0">
                <span className="fas fa-map-marker-alt mr-2" />
            {card.location}
              </li>
              <li className="list-group-item small p-0">
                <span className="fas fa-bullseye mr-2" />
                {card.nearbyplace1}
              </li>
              <li className="list-group-item small p-0">
                <span className="fas fa-bullseye mr-2" />
                {card.nearbyplace2}
              </li>
            </ul>
          </div>
          <div className="card-footer bg-soft border-top">
            <div className="d-flex justify-content-between">
              <div className="col pl-0">
                <span className="text-muted font-small d-block mb-2">
                  Monthly
                </span>{" "}
                <span className="h5 text-dark font-weight-bold"> {card.monthly}</span>
              </div>
              <div className="col">
                <span className="text-muted font-small d-block mb-2">People</span>{" "}
                <span className="h5 text-dark font-weight-bold"> {card.pepole}</span>
              </div>
              <div className="col pr-0">
                <span className="text-muted font-small d-block mb-2">Sq.Ft</span>{" "}
                <span className="h5 text-dark font-weight-bold"> {card.sqft}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  )
  );
}

