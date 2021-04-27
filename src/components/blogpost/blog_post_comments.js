import React from 'react';

export default function Blog_post_comments() {

    let blog_post_array = [{
        img:"../assets/img/team/profile-picture-1.jpg",
        time:"2 min",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab needed.",

    },
    {
        img:"../assets/img/team/profile-picture-1.jpg",
        time:"2 min",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab needed.",

    },
    {
        img:"../assets/img/team/profile-picture-1.jpg",
        time:"2 min",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab needed.",

    },]
    return (

        <div className="section section-md bg-white text-black pt-0 line-bottom-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div><label className="h5 mb-4" htmlFor="exampleFormControlTextarea1"><span className="badge badge-md badge-primary text-uppercase mr-2">23</span> Comments</label> <textarea className="form-control border border-light-gray" id="exampleFormControlTextarea1" placeholder="Add your comment" rows={6} data-bind-characters-target="#charactersRemaining" maxLength={1000} defaultValue={""} />
                            <div className="d-flex justify-content-between mt-3"><small className="font-weight-light text-dark"><span id="charactersRemaining" /> characters remaining</small> <button className="btn btn-primary animate-up-2">Send</button></div>
                            <div className="mt-5">

                                {blog_post_array.map((data) => {
                                    return (
                                        <div className="card bg-soft border-light rounded p-4 mb-4">
                                            <div className="d-flex justify-content-between mb-4"><span className="font-small"><a><img className="avatar-sm img-fluid rounded-circle mr-2" src={data.img} alt="avatar" /> <span className="font-weight-bold">John Doe</span> </a><span className="ml-2">{data.time}
            ago</span></span>
                                                <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                                            </div>
                                            <p className="m-0">{data.comment}<br /><br /></p>
                                            <div className="mt-4 mb-3 d-flex justify-content-between">
                                                <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" /> <span className="font-small font-weight-light">4 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer1" aria-expanded="false" aria-controls="replyContainer1"><span className="fas fa-reply mr-2" /> Reply</a>
                                            </div>
                                            <div className="collapse" id="replyContainer1"><label className="mb-4" htmlFor="exampleFormControlTextarea10">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea10" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply" maxLength={1000} defaultValue={""} />
                                                <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                                            </div>
                                        </div>)
                                })}

                                {/* <div className="card bg-soft border-light rounded p-4 ml-5 mb-4">
                                    <div className="d-flex justify-content-between mb-4"><span className="font-small"><a  ><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-2.jpg" alt="Bonnie avatar" /> <span className="font-weight-bold">Bonnie Green</span> </a><span className="ml-2">2 min ago</span></span>
                                        <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                                    </div>
                                    <p className="m-0">Hi John Doe,<br /><br />We're happy to hear you like our product. A new one will come soon
        enough!</p>
                                    <div className="mt-4 mb-3 d-flex justify-content-between">
                                        <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" /> <span className="font-small font-weight-light">2 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer2" aria-expanded="false" aria-controls="replyContainer2"><span className="fas fa-reply mr-2" /> Reply</a>
                                    </div>
                                    <div className="collapse" id="replyContainer2"><label className="mb-4" htmlFor="exampleFormControlTextarea11">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea11" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply2" maxLength={1000} defaultValue={""} />
                                        <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply2" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                                    </div>
                                </div>
                                <div className="card bg-soft border-light rounded p-4 mb-4">
                                    <div className="d-flex justify-content-between mb-4"><span className="font-small"><a  ><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-3.jpg" alt="James avatar" /> <span className="font-weight-bold">James Curran</span> </a><span className="ml-2">2 min ago</span></span>
                                        <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                                    </div>
                                    <p className="m-0">Hey there! We want to say that <span className="text-tertiary">you're awesome</span> and we
        think you'll build great websites! Why not use Pixel to make things easier?</p>
                                    <div className="mt-4 mb-3 d-flex justify-content-between">
                                        <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" /> <span className="font-small font-weight-light">4 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer3" aria-expanded="false" aria-controls="replyContainer3"><span className="fas fa-reply mr-2" /> Reply</a>
                                    </div>
                                    <div className="collapse" id="replyContainer3"><label className="mb-4" htmlFor="exampleFormControlTextarea12">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea12" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply3" maxLength={1000} defaultValue={""} />
                                        <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply3" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                                    </div>
                                </div>
                                <div id="extraContent" style={{ display: 'none' }}>
                                    <div className="card bg-soft border-light p-4 mb-4">
                                        <div className="d-flex justify-content-between mb-4"><span className="font-small"><a  ><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" /> <span className="font-weight-bold">Neil Sims</span> </a><span className="ml-2">2 min ago</span></span>
                                            <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                                        </div>
                                        <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab<br /><br />When is the next product coming? :)</p>
                                        <div className="mt-4 mb-3 d-flex justify-content-between">
                                            <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" />
                                                <span className="font-small font-weight-light">4 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer4" aria-expanded="false" aria-controls="replyContainer4"><span className="fas fa-reply mr-2" /> Reply</a>
                                        </div>
                                        <div className="collapse" id="replyContainer4"><label className="mb-4" htmlFor="exampleFormControlTextarea13">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea13" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply4" maxLength={1000} defaultValue={""} />
                                            <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply4" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                                        </div>
                                    </div>
                                    <div className="card bg-soft rounded border-light p-4 ml-5 mb-4">
                                        <div className="d-flex justify-content-between mb-4"><span className="font-small"><a  ><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-5.jpg" alt="Jose avatar" /> <span className="font-weight-bold">Jose Leos</span> </a><span className="ml-2">2 min ago</span></span>
                                            <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                                        </div>
                                        <p className="m-0">Hi John Doe,<br /><br />We're happy to hear you like our product. A new one will come
          soon enough!</p>
                                        <div className="mt-4 mb-3 d-flex justify-content-between">
                                            <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" />
                                                <span className="font-small font-weight-light">2 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer5" aria-expanded="false" aria-controls="replyContainer5"><span className="fas fa-reply mr-2" /> Reply</a>
                                        </div>
                                        <div className="collapse" id="replyContainer5"><label className="mb-4" htmlFor="exampleFormControlTextarea14">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea14" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply5" maxLength={1000} defaultValue={""} />
                                            <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply5" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="mt-5 text-center"><button id="loadOnClick" className="btn btn-primary btn-loading-overlay mr-2 mb-2"><span className="spinner"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> </span><span className="ml-1 btn-inner-text">Load more comments</span></button>
                                    <p id="allLoadedText" style={{ display: 'none' }}>That's all, Sparky!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}