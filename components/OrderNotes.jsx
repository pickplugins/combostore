"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconMessagePlus, IconClipboardText, IconStarFilled, IconMessage2, IconMessages, IconShoppingCartCancel, IconLetterX, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, } from "@tabler/icons-react";





import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
// import LocationPicker from "../components/LocationPicker";
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



const OrderNotes = (props) => {
  const { formatDate } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()

  var order_id = props?.order_id



  var [notes, setnotes] = useState(props?.notes);
  var [loading, setloading] = useState(false);
  var [isOpen, setisOpen] = useState(false);
  var [queryPrams, setqueryPrams] = useState({ paged: 1, order: "DESC", per_page: 5, });

  var [newNoteData, setNewNoteData] = useState({
    post_id: order_id,
    content: "",
  });






  useEffect(() => {


    get_order_notes();
  }, []);






  function get_order_notes() {



    if (!order_id) {
      return;
    }




    var postData = {

      post_id: order_id,
      per_page: queryPrams.per_page,
      paged: queryPrams.paged,
      order: queryPrams.order,
    };
    postData = JSON.stringify(postData);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_order_notes", {
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





            var posts = res?.comments;
            var total = res?.total;
            var max_pages = res?.max_pages;




            setnotes({ posts: posts, total: total, maxPages: max_pages })
            //setqueryPrams({ ...queryPrams, loading: false })
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


  function add_order_note() {



    if (!newNoteData.content) {
      addNotification({ type: 'error', title: 'Notes missing', content: 'Please enter notes' })

      return;
    }

    var postData = JSON.stringify(newNoteData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/add_order_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {





            var success = res?.success;
            var message = res?.message;

            if (success == true) {
              addNotification({ type: 'success', title: 'Note added', content: message })
            } else {
              addNotification({ type: 'error', title: 'Note added failed', content: message })

            }

            setloading(false);
            setisOpen(false);

            get_order_notes();


          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }


  function delete_order_note(id) {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    // if (queryPrams.page < 0) {
    //   return;
    // }




    var postData = {
      comment_id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_order_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            var errors = res?.errors;
            var success = res?.success;

            setloading(false);

            get_order_notes();

            if (success == true) {
              addNotification({ type: 'success', title: 'Note deleted', content: "" })
            } else {
              addNotification({ type: 'error', title: 'Note delete failed', content: "" })

            }


          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }

  const requiredRoles = ["administrator", "rider"];
  const hasAccess = requiredRoles.some(role => userDataX.roles.includes(role));


  const orderStatusMessages = [
    "Your order has been placed successfully.",
    "We’re waiting for your payment confirmation.",
    "Payment received! We’re preparing your order.",
    "Your order is now being processed.",
    "Great news! Your order has been packed.",
    "Your order has been shipped.",
    "Your package is on the way to you.",
    "Out for delivery today!",
    "Your order has been delivered successfully.",
    "Thank you for shopping with us!",
    "We’ve emailed you the order details.",
    "Your invoice is ready and available.",
    "Your order is on hold. Please contact support.",
    "Unfortunately, your payment was not successful.",
    "Your order has been cancelled as requested.",
    "We’re experiencing a slight delay with your order.",
    "Your order has been partially shipped.",
    "Your refund has been initiated.",
    "Refund completed successfully.",
    "Need help? Our support team is here for you."
  ]
    ;

  function onTriggerOpenSampleNotes(args) {




  }





  return (
    <div>


      <div className="my-5 flex justify-end items-center gap-2">
        {loading && (
          <Spinner />
        )}
        <PopoverButton isOpen={isOpen} buttonLabel={("Add Notes")} buttonIcon={<IconMessagePlus />} title={"Add Notes"} position={""}>


          <div className='bg-white p-5'>




            <div className='flex gap-2 items-center justify-end '>

              {loading && (
                <Spinner />
              )}

              <PopoverButton buttonLabel={("Sample Notes")} buttonClass={` px-2 py-1 cursor-pointer `} buttonIcon={<IconMessages size={16} />} title={"Sample Notes"} position={""} onTriggerOpen={onTriggerOpenSampleNotes}>

                <div className="bg-[#9a90ff] p-5 flex flex-wrap gap-2">
                  {orderStatusMessages?.map((item, index) => {

                    return (
                      <div key={index} className="border flex gap-2 rounded-full border-[#1b0e9f] px-2 py-1 cursor-pointer hover:bg-[#9a90ff]" onClick={ev => {


                        setNewNoteData({
                          ...newNoteData,
                          content: item,
                        });

                      }}>
                        <IconMessage2 size={16} />
                        {item}</div>
                    )

                  })}

                </div>

              </PopoverButton>

              <div
                onClick={(ev) => {
                  add_order_note();
                }}
                className="!border-2 border-solid !border-gray-600 !shadow-none px-3 py-1 rounded-sm text-center  cursor-pointer col-span-2">
                {("Submit")}
              </div>
            </div>

            <div className="grid grid-cols-1  gap-4   ">

              <div className="">
                <div htmlFor="" className="flex justify-between items-center">

                  <div>Notes</div>



                </div>

                <textarea name="" id="" className=" w-full  "
                  value={newNoteData?.content}
                  onChange={(ev) => {
                    setNewNoteData({
                      ...newNoteData,
                      content: ev.target.value,
                    });
                  }}></textarea>


              </div>



            </div>



          </div>

        </PopoverButton>
      </div>


      {/* {JSON.stringify(notes)} */}



      {notes?.posts?.length == 0 && (
        <div className="bg-white shadow-sm  p-5 rounded-sm">
          No notes yet, Please add note first.
        </div>
      )}



      {notes?.posts?.length > 0 && (
        <div className="flex flex-col gap-3">

          <div className="text-xl my-5">Notes</div>

          {notes?.posts?.map(comment => {

            return (
              <div className={` bg-gray-200 rounded-sm p-3 `}>

                <div className="flex gap-4 flex-col  ">

                  <div className="flex justify-between items-center">

                    <div className="w-max flex gap-2 items-center ">
                      <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                        {/* <Image className="w-full h-full object-cover" src={comment?.avatar} alt={comment?.comment_author} width={40} height={40} /> */}


                      </div>
                      <div className="text-sm w-max ">{comment?.comment_author}</div>
                    </div>

                    <div className="cursor-pointer bg-red-400 p-2 rounded-sm text-white" onClick={ev => {

                      delete_order_note(comment?.comment_ID)


                    }}>
                      <IconTrash size={18} />
                    </div>

                  </div>




                  <div className=" w-full text-sm ">
                    {comment?.comment_content}
                  </div>






                </div>

              </div>
            )

          })}

        </div>
      )}



      {notes?.posts?.length > 0 && (
        <div className="
					flex items-center justify-center gap-3  my-3">
          <div
            className="!border-2 border-solid border-gray-600 !shadow-none px-2 py-1 rounded-sm cursor-pointer"
            onClick={(ev) => {
              var paged = queryPrams.paged;


              if (paged == 1) return;
              setqueryPrams({ ...queryPrams, paged: queryPrams.paged - 1 });
            }}>
            <IconArrowNarrowLeftDashed />
          </div>

          <div>
            <input className="!border-2 border-solid !border-gray-600 !shadow-none px-2 py-1 rounded-sm cursor-pointer w-16 text-center" type="text" value={queryPrams.paged} onChange={ev => {
              var value = parseInt(ev.target.value)
              var paged = value;

              if (paged > notes?.maxPages) return;
              setqueryPrams({ ...queryPrams, paged: paged });

            }} />
          </div>

          <div
            className="!border-2 border-solid border-gray-600 !shadow-none px-2 py-1 rounded-sm cursor-pointer"
            onClick={(ev) => {
              var paged = queryPrams.paged + 1;

              if (paged > notes?.maxPages) return;
              setqueryPrams({ ...queryPrams, paged: paged });
            }}>
            <IconArrowNarrowRightDashed />
          </div>
        </div>

      )}


    </div>
  );
};

export default OrderNotes;