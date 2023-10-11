// export default class Timer{
//     focus:number
//     short_Brake:number
//     long_Brake:number
//     state:number
//     work_rounds:number
//     timeCount:number
//     total:number
//     myInterval:any
    
//     constructor(){
//         this.focus=  10,
//         this.short_Brake= 6,
//         this.long_Brake= 20,

//         // this.Limit= "Limit",
        
//         this.state= 1,
//         this.work_rounds = 3,
//         this.timeCount= 0,
//         this.total= 0
//       }
//       start(){
//         let focus = this.focus* 60
//         let short_Brake = this.short_Brake* 60
//         let long_Brake = this.long_Brake* 60

//         this.myInterval = setInterval(()=>{
//           var timeLimit = this.state % 2 === 0 ? short_Brake : focus
//           if (this.state== this.work_rounds*2) {timeLimit = long_Brake}
//           this.timeCount += 1
//           var timeCountdown = timeLimit - this.timeCount
//           var clockCountdown = timeCountdown 
//           var min = Math.floor(clockCountdown / (60))
//           var sec = Math.floor(clockCountdown % (60))

//           // this.Limit = min +':'+ sec

          
          
//           if (this.timeCount >= timeLimit) {
//             if(this.state % 2 !== 0 ){
//                 this.total +=this.timeCount
//             }
//             this.state++
//             this.timeCount = 0
//             clearInterval(this.myInterval);
//           }
//         }, 1000)
//       }
//       pause(){
//         clearInterval(this.myInterval)
//       }
//       skip(){
//         this.state
//         this.timeCount = 0
//         clearInterval(this.myInterval);
//       }
// }


  