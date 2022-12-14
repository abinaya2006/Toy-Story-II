AFRAME.registerComponent("markerhandler",{
    init:async function()
    {
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()

        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost")
            this.handleMarkerLost()
        })
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        
        var orderButton=document.getElementById("order-button")
        var order_SumButton=document.getElementById("order-summary-button")
        orderButton.addEventListener("click",function(){
            swal({
                
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for the order",
                text:"Your order will be served soon!"
            })
        })
        order_SumButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work in progress"
            })
        })
    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"


    },
})