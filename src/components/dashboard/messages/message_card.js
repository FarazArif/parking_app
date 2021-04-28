import React from "react";

export default function Message_card() {
  let message_card_array = [
    {
      username: "Neil Sims",
      date: "Dec 25",
      message: " I want to rent today, is the house still valid ...",
    },
    {
        username: "Neil Sims",
        date: "Dec 25",
        message: " I want to rent today, is the house still valid ...",
      },
      {
        username: "Neil Sims",
        date: "Dec 25",
        message: " I want to rent today, is the house still valid ...",
      },
      {
        username: "Neil Sims",
        date: "Dec 25",
        message: " I want to rent today, is the house still valid ...",
      },
      {
        username: "Neil Sims",
        date: "Dec 25",
        message: " I want to rent today, is the house still valid ...",
      },
      {
        username: "Neil Sims",
        date: "Dec 25",
        message: " I want to rent today, is the house still valid ...",
      },
      {
        username: "Neil Sims",
        date: "Dec 25",
        message: " I want to rent today, is the house still valid ...",
      },

  ];

  return (
    message_card_array.map((m_card)=>{

        return( <div className="card border-light mb-3 py-3">
        <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
          <div className="col-auto col-lg-1 d-flex align-items-center px-0">
            <div className="form-check inbox-check mr-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="defaultCheck1"
              />{" "}
              <label className="form-check-label" htmlFor="defaultCheck1" />
            </div>
            <div className="rating-star d-none d-sm-inline-block">
              <input type="checkbox" id="InboxStar1" name="star" />
              <label className="rating-star-label" htmlFor="InboxStar1">
                <span className="sr-only">Star</span>
              </label>
            </div>
          </div>
          <div className="col-lg-3 col-8 pl-0 ml-2">
            <a className="h6 text-sm">{m_card.username}</a>
          </div>
          <div className="col col-lg-1 text-right px-0 order-lg-4">
            <span className="text-muted text-sm">{m_card.date}</span>
          </div>
          <div className="col-12 col-lg-7 d-flex align-items-center px-0">
            <div className="col col-lg-11 px-0">
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center">
                <a className="col-12 col-lg pl-0 font-weight-normal text-dark d-none d-sm-block mt-2 mt-lg-0">
                {m_card.message}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>)
    })

  )
}
