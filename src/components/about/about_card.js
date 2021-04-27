import React from "react"
export default function About_Card() {
    let about_card_detail=[
        {
            img:"../assets/img/team/profile-picture-1.jpg",
            title:"Al Muslim",
            designation:"Founder",
            description:"SLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi.."

        },
        {
            img:"../assets/img/team/profile-picture-2.jpg",
            title:"Al Muslim",
            designation:"Agent",
            description:"SLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi.."

        },
        {
            img:"../assets/img/team/profile-picture-3.jpg",
            title:"Al Muslim",
            designation:"Marketing",
            description:"SLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi.."

        },
    ]
    return (
        <div className="row mb-5 mb-lg-7">
             {about_card_detail.map((person, index) => (
            <div index={index} className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="card border-light"><img src={person.img} className="card-img-top rounded-top" alt="Joseph Portrait" />
                    <div className="card-body">
                        <h3 className="h4 card-title mb-2">{person.title}</h3><span className="card-subtitle text-gray font-weight-normal">{person.designation}</span>
                        <p className="card-text my-3">{person.description}</p>
                        <ul className="list-unstyled d-flex mt-3 mb-0">
                            <li><a aria-label="facebook social link" className="icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                            <li><a aria-label="twitter social link" className="icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                            <li><a aria-label="slack social link" className="icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                            <li><a aria-label="dribbble social link" className="icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
              ))}
           
        </div>
    );
}