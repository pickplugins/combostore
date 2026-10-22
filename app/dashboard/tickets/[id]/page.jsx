'use client'
import React, { use } from 'react'
import Link from "next/link";


import { useState, useEffect, useContext } from "react";
import Image from "next/image";


import Comments from "../../../../components/shop-elements/Comments";

import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconEyeSearch, IconReplace } from "@tabler/icons-react";
import Spinner from '../../../../components/Spinner';


const page = ({ params }) => {
  const { id } = use(params)




  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



  var [promptData, setpromptData] = useState(null);
  var [loading, setloading] = useState(false);
  var [editPlaceholders, seteditPlaceholders] = useState(null);

  function fetchPost() {


    setloading(true);

    // if (!token) {
    //   //throw new Error("No token found");
    // }
    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/get_ticket", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {

            var prompt = res?.prompt;




            setpromptData(prompt)
            setloading(false);



            setTimeout(() => {
            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }

  // useEffect(() => {
  // 	fetchPost();
  // }, []);

  useEffect(() => {
    fetchPost();
    setTimeout(() => {
      viewPost(id)
    }, 500)
  }, [id]);





  const copyData = (data) => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
      })
      .catch((err) => { });
  };


  function formatDate(dateInput) {


    var format = "d/m/Y";
    dateInput = dateInput == undefined ? '' : dateInput;
    // Ensure date is in a proper format for parsing
    const dateObj = new Date(dateInput.replace(" ", "T"));

    if (isNaN(dateObj)) {
      throw new Error("Invalid date format");
    }

    // Extract date components
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObj.getFullYear();

    //return ;

    return (
      <>
        {format.replace("d", day).replace("m", month).replace("Y", year)}
      </>

    );

  }



  function toSlug(text) {
    return text
      .toLowerCase()
      .replace(/\[.*?\]/g, '')        // remove anything inside [ ]
      .replace(/[^\w\s-]/g, '')       // remove non-word chars except space and dash
      .replace(/\s+/g, '-')           // replace spaces with dashes
      .replace(/-+/g, '-')            // collapse multiple dashes
      .replace(/^-|-$/g, '');         // trim starting/trailing dash
  }






  function votePost(postId, action) {




    if (!token) {

      addNotification({ type: 'error', title: 'Login Required', content: "Please Login to vote prompt" })

      //throw new Error("No token found");
    }


    // if (!token) {
    // 	//throw new Error("No token found");
    // }

    // if (action) {
    // 	return;
    // }

    var postData = {
      id: postId,
      action: action,
    };



    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/post_vote", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            setTimeout(() => {
              addNotification({ type: 'success', title: 'Great! You earned credits', content: "By Voting other content you will earn credits." })

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }

  function viewPost(postId) {



    // if (!token) {
    // 	//throw new Error("No token found");
    // }

    // if (action) {
    // 	return;
    // }

    var postData = {
      id: postId,
      source: 'archive',
    };


    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/post_view", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {


            setTimeout(() => {
            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }

  function lovePost(postId) {



    if (!token) {

      addNotification({ type: 'error', title: 'Login Required', content: "Please Login to Love prompt" })

      //throw new Error("No token found");
    }

    var loved = promptData?.loved;



    var postData = {
      object_id: postId,
      source: 'archive',
    };


    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/post_loved", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {


            setTimeout(() => {

              if (loved) {
                var loveCount = promptData.loveCount - 1;
                loved = false;
              } else {
                var loveCount = promptData.loveCount + 1;
                loved = true;
                addNotification({ type: 'success', title: 'Great! You earned credits', content: "By Loving other content you will earn credits." })

              }

              setpromptData({ ...promptData, loveCount: loveCount, loved: loved })

            }, 200);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }




  const communityComments = [
    "Need help ASAP!",
    "Can't log in.",
    "Site is down?",
    "Where's my order?",
    "App keeps crashing.",
    "Reset password link?",
    "Live chat not working.",
    "Billing error shown.",
    "No reply yet.",
    "Thanks for the fix!",
    "Account locked out.",
    "Payment failed again.",
    "Error on checkout.",
    "Still not working.",
    "Please respond soon.",
    "Issue not resolved.",
    "Link is broken.",
    "Stuck on loading.",
    "Support is offline.",
    "Can't upload files."
  ];







  return (
    <div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

        {/* Page heading: this screen showed no title at all. */}
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-xl font-semibold text-gray-900">
            {("Ticket")} <span className="font-normal text-gray-400">#{id}</span>
          </h1>
        </div>

        {loading && (
          <div className=" flex justify-center">
            <div className="form-card flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 shadow-sm"><Spinner /> <div>{("Loading")}</div></div>
          </div>

        )}


        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-1 lg:grid-cols-1 rounded-xl border border-gray-200 bg-gray-50 p-5 gap-10 text-gray-700">

            {/* {JSON.stringify(promptData?.gallery)} */}



            <div className="text-left flex flex-col gap-4 ">
              <div className="text-lg font-semibold text-gray-900">{promptData?.title}</div>

              <div className='flex justify-between items-center'>
                <div>
                  <div className="flex gap-3 items-center">

                    <div className="flex gap-4 items-center">

                      <div className="  overflow-hidden">
                        <Image className="rounded-full " src={promptData?.author.avatar} alt={promptData?.author.name} width={40} height={40} />
                      </div>
                      <div>


                        <div className="text-left text-sm font-medium text-gray-900" href={`/author/${promptData?.author?.id}/`}>
                          {promptData?.author.name}
                        </div>
                      </div>

                    </div>


                    {promptData?.categories.map((item, index) => {
                      return (
                        <div className="flex gap-2 flex-wrap items-start">
                          <div>{("Categories")}</div>
                          <div key={index} className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                            <span>{item.name}</span>
                            {/* {promptData?.categories.length > (index + 1) && (
                        <span>,</span>
                      )} */}
                          </div>
                        </div>
                      )
                    })}









                    {promptData?.tags.map((item, index) => {
                      return (
                        <>
                          <div className="flex gap-2 flex-wrap">

                            <div>	{("Tags")}</div>
                            <div key={index} className="flex flex-wrap">
                              <span>{item}</span>
                              {promptData?.tags.length > (index + 1) && (
                                <span>,</span>
                              )}
                            </div>
                          </div>
                        </>
                      )
                    })}


                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <div className="flex gap-3 items-center">

                    <div className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer" onClick={() => {


                      votePost(promptData?.id, 'upvote');
                      var voteCount = parseInt(promptData.voteCount) + 1;;
                      setpromptData({ ...promptData, voteCount: voteCount })
                    }}>
                      <IconThumbUp width={20} />

                    </div>

                    <div>{promptData?.voteCount}</div>

                    <div className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer" onClick={() => {

                      votePost(promptData?.id, 'downvote');

                      var voteCount = parseInt(promptData.voteCount) - 1;;
                      setpromptData({ ...promptData, voteCount: voteCount })

                    }}>
                      <IconThumbDown width={20} />

                    </div>

                  </div>

                  <div className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer" ><IconEyeSearch />
                    <div>{promptData?.viewCount}</div>
                  </div>



                  <div className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer" onClick={ev => {





                    lovePost(promptData?.id);

                    var loved = !promptData.loved;
                    setpromptData({ ...promptData, loved: loved })


                  }}>

                    {promptData?.loved && (
                      <div className="flex gap-2 ">

                        <div className="text-red-400">
                          <IconHeartFilled />
                        </div>

                        <div>{promptData?.loveCount}</div>
                      </div>
                    )}
                    {!promptData?.loved && (
                      <div className="text-red-500 flex gap-2"><IconHeart /> <div>{promptData?.loveCount}</div></div>


                    )}




                  </div>

                </div>
              </div>













            </div>

          </div>


          {promptData?.content && (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 gap-10 text-gray-700">

              <div className=" w-full mx-auto">
                <div className="text-2xl text-white mb-5">{("Ticket Details")}</div>

                <div>
                  {promptData?.content}
                </div>
              </div>



            </div>
          )}






          <div>
            <Comments dummyComments={communityComments} id={id} />
          </div>








        </div>

      </div>



    </div>
  )
}

export default page