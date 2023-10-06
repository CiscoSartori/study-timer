class Timer{
    state:number
    timeCount:number
    timeLimit:number
    minute:number
    myInterval:any
    
    constructor(){
        this.state = 1
        this.timeCount = 0
        this.timeLimit =1
        this.minute = 60
        this.myInterval
      }
      start(){
        this.myInterval = setInterval(()=>{
          this.state % 2 === 0 ? this.timeLimit = 5 * 60: this.timeLimit = 1 * 60
          this.timeCount += 1
          const timeCountdown = this.timeLimit - this.timeCount
          const clockCountdown = timeCountdown 
          const min = Math.floor(clockCountdown / (this.minute))
          const sec = Math.floor(clockCountdown % (this.minute))
        //   document.getElementById("time").value = clockCountdown;
        const input = document.getElementById('timer') as HTMLInputElement | null;
            if(input != null){
                input.innerHTML = min+':'+sec
            }

        //   document.getElementById("timer").innerHTML = min+':'+sec
    
          if (this.timeCount >= this.timeLimit) {
            this.state++
            this.timeCount = 0
            clearInterval(this.myInterval);
          }
        }, 1000)
    
      }
      pause(){
        clearInterval(this.myInterval)
      }
      skip(){
        this.state++
        this.timeCount = 0
        clearInterval(this.myInterval);
      }
      close(){
        // window.myAPI.closeApp()
      
      }

}

  // document.getElementById("closeBtn").addEventListener("click", window.myAPI.closeApp())
  const timer = new Timer()


export default timer
  
  