 import React, {useState} from 'react'
const App = () => { 
  const [display, setDisplay] = React.useState({
    show: "",
    add: [],
    subtract: [],
    currentValue: []
  })
 const [plus, setPlus] = React.useState(false)
 const [wasPlus, setWasPlus] = React.useState(false)
 const [wasSub, setWasSub] = React.useState(false)
 const [sub, setSub] = React.useState(false)
 const [muli, setMuli] = React.useState(false)
 const [wasMuli, setWasMuli] = React.useState(false)
 const [divide, setDivide] = React.useState(false)
 const [wasDivide, setWasDivide] = React.useState(false)
 const [decimal, setDecimal] = React.useState(false)
 const [neg, setNeg] = React.useState(false)
 
 
 const stylesAdd = {backgroundColor: plus ? "black" : "white", color: plus ? "orange" : "black"}
 const stylesSub = {backgroundColor: sub ? "black" : "white", color: sub ? "orange" : "black"}
 const stylesMuli = {backgroundColor: muli ? "black" : "white", color: muli ? "orange" : "black"}
 const stylesDivide = {backgroundColor: divide ? "black" : "white", color: divide ? "orange" : "black"}
  
  function setDecimalPoint(){
    if(display.show.includes(".")){
      setDecimal(false)
    } else {
      setDecimal(true)
    }
  }
  console.log(decimal)
  console.log(display.show) 
  
  function clearOperationStates(){
        setPlus(false)  
        setSub(false)
        setMuli(false)
        setDivide(false)
  }
  
  function makeNumberNegetive(){
    setNeg(true)
    if(display.show === ""){
      null
    } else {
      setDisplay(x => {
      return {
        ...x,
        show: -Math.abs(parseFloat(display.show))
      }
    })
    }
    
     }
  
  function clearDisplay(){
    setDisplay(prev => {
      return {
        ...prev,
        show: ""
      }
    })
  }
  
 
  
  function addOne(){
      if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "1"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "1"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "1"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "1"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "1"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "1",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "1")
         }
       })
       setNeg(false)
     }    else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "1"
          }
        })
     }  
  } 
      
 
  
  
  
 
  

  
  
  
  
  
  
  
  
  
  function addTwo(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "2"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "2"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "2"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "2"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "2"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "2",
         }
       })
       setDecimal(false)
     }else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "2")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "2"
          }
        })
     }   
  }
  
  
  
  function addThree(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "3"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "3"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "3"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "3"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "3"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "3",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "3")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "3"
          }
        })
     }  
  }
  
  function addFour(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "4"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "4"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "4"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "4"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "4"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "4",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "4")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "4"
          }
        })
     }  
  }
  
  function addFive(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "5"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "5"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "5"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "5"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "5"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "5",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "5")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "5"
          }
        })
     }  
  }
  
  function addSix(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "6"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "6"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "6"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "6"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "6"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "6",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "6")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "6"
          }
        })
     } 
  }
  
  function addSeven(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "7"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "7"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "7"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "7"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "7"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "7",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "7")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "7"
          }
        })
     } 
  }
  
  function addEight(){
   if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "8"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "8"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "8"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "8"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "8"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "8",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "8")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "8"
          }
        })
     } 
  }
  
  function addNine(){
    if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "9"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "9"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "9"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "9"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "9"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "9",
         }
       })
       setDecimal(false)
     } else if(display.show === "" && neg){
       setDisplay(x => {
         return {
           ...x,
           show: -Math.abs(display.show + "1")
         }
       })
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "9"
          }
        })
     } 
  }
  
  function addZero(){
   if(display.show === ""){
      null
   } else if(plus && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "0"
          }
        })
      } else if(sub && display.show !== ""){
        display.currentValue.push(parseFloat(display.show)) 
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "0"
          }
        })
    
     } else if(muli && display.show !== ""){
       display.currentValue.push(parseFloat(display.show))
       clearOperationStates()
       setDisplay(x => {
         return {
           ...x,
           show: "" + "0"
         }
       })
     } else if(divide && display.show !== ""){
        display.currentValue.push(parseFloat(display.show))
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: "" + "0"
          }
        })
     } else if(display.show === "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show: display.show + "." + "0"
         }
       })
       setDecimal(false)
     } else if(display.show !== "" && decimal){
       setDisplay(x => {
         return {
           ...x,
           show:  display.show + "." + "0",
         }
       })
       setDecimal(false)
     } else {
        clearOperationStates()
        setDisplay(x => {
          return {
            ...x,
            show: display.show + "0"
          }
        })
     } 
  }
  
  
 
  function addition(){      
    if(display.currentValue.length <= 0 && display.show !== ""){
      setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false)
      display.currentValue.push(parseFloat(display.show))
      clearDisplay()
    } else if(display.currentValue.length == 1 && !wasMuli && !wasSub && !wasDivide && display.show !== ""){
      setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: parseFloat(display.show) + display.currentValue[0],
          currentValue: []
        }   
      })
    } else if(display.currentValue.length == 1 && wasSub && display.show !== ""){
      setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false), setWasSub(false)
      setDisplay(x => {
         return {
           ...x,
           show: display.currentValue[0] - parseFloat(display.show),
           currentValue: []
         }
       })
    } else if(display.currentValue.length == 1 && wasMuli && display.show !== ""){
      setPlus(true), setSub(false), setMuli(false), setDivide(false), setWasPlus(true), setWasMuli(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] * parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasDivide && display.show !== ""){
      setPlus(true), setSub(false), setMuli(false), setDivide(false), setWasPlus(true), setWasDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] / parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.show === "" && display.currentValue.length <= 0){
       setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false)
       setDisplay(x => {
         return {
           ...x,
           show: ""
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasDivide){
        setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false), setWasDivide(false)
        setDisplay(x => {
          return {
            ...x,
            show: display.show,
          }
        })
    } else if(display.show === "" && display.currentValue.length == 1 && wasMuli){
      setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false), setWasMuli(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.show
        }
      })
    } else if(display.show === "" && display.currentValue.length == 1 && wasSub){
   setPlus(true), setWasPlus(true), setSub(false), setMuli(false), setDivide(false), setWasSub(false)
   setDisplay(x => {
     return {
       ...x,
       show: display.show
     }
   })
 }
} 
  
  
  
 function subtract(){
    if(display.currentValue.length <= 0 && display.show !== ""){
      setSub(true), setWasSub(true), setPlus(false), setMuli(false), setDivide(false)
      display.currentValue.push(parseFloat(display.show))
      clearDisplay()
    } else if(display.currentValue.length == 1 && !wasPlus && !wasMuli && !wasDivide){
      setSub(true), setWasSub(true), setPlus(false), setMuli(false), setDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] - parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasPlus && display.show !== ""){
      setSub(true), setPlus(false), setMuli(false), setDivide(false), setWasSub(true), setWasPlus(false)
      setDisplay(x => {
        return {
          ...x,
          show: parseFloat(display.show) + display.currentValue[0],
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasMuli && display.show !== ""){
      setSub(true), setPlus(false), setMuli(false), setDivide(false), setWasSub(true), setWasMuli(false)
      setDisplay(x => {
        return {
          ...x,
          show: parseFloat(display.show) * display.currentValue[0],
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasDivide && display.show !== ""){
      setSub(true), setPlus(false), setMuli(false), setDivide(false), setWasSub(true), setWasDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] / parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.show === "" && display.currentValue.length <= 0){
       setSub(true), setWasSub(true), setPlus(false), setMuli(false), setDivide(false)
       setDisplay(x => {
         return {
           ...x,
           show: ""
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasPlus){
      setSub(true), setWasSub(true), setWasPlus(false), setPlus(false), setMuli(false), setDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.show
        }
      })
    } else if(display.show === "" && display.currentValue.length == 1 && wasMuli){
      setSub(true), setWasSub(true), setWasMuli(false), setPlus(false), setMuli(false), setDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.show
        }
      })
    } else if(display.show === "" && display.currentValue.length == 1 && wasDivide){
      setSub(true), setWasSub(true), setWasDivide(false), setPlus(false), setMuli(false), setDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.show
        }
      })
    }       
 } 

 
  function mulipcation(){
    if(display.currentValue.length <= 0 && display.show !== ""){
      setMuli(true), setWasMuli(true), setPlus(false), setSub(false), setDivide(false)
      display.currentValue.push(parseFloat(display.show))
      clearDisplay()
    } else if(display.currentValue.length == 1 && !wasSub && !wasPlus && !wasDivide){
      setMuli(true), setWasMuli(true), setSub(false), setPlus(false), setDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: parseFloat(display.show) * display.currentValue[0],
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasSub && display.show !== ""){
       setMuli(true), setSub(false), setPlus(false), setDivide(false), setWasMuli(true), setWasSub(false)
       setDisplay(x => {
         return {
           ...x,
           show: display.currentValue[0] - parseFloat(display.show),
           currentValue: []
         }
       })
    } else if(display.currentValue.length == 1 && wasPlus && display.show !== ""){
   setMuli(true), setSub(false), setPlus(false), setDivide(false), setWasPlus(false), setWasMuli(true)
   setDisplay(x => {
     return {
       ...x,
       show: display.currentValue[0] + parseFloat(display.show),
       currentValue: []
     }
   })
  } else if(display.currentValue.length == 1 && wasDivide && display.show !== ""){
      setMuli(true), setPlus(false), setSub(false), setDivide(false), setDivide(false), setWasMuli(true), setWasDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] / parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.show === "" && display.currentValue.length <= 0){
       setMuli(true), setWasMuli(true), setSub(false), setPlus(false), setDivide(false)
       setDisplay(x => {
         return {
           ...x,
           show: ""
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasPlus){
       setMuli(true), setWasMuli(true), setSub(false), setPlus(false), setWasPlus(false), setDivide(false)
       setDisplay(x => {
         return {
           ...x,
           show: display.show
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasSub){
      setMuli(true)
      setWasMuli(true)
      setSub(false)
      setWasSub(false)
      setPlus(false)
      setDivide(false)
      setDisplay(x => {
         return {
           ...x,
           show: display.show
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasDivide){
      setMuli(true)
      setWasMuli(true)
      setSub(false)
      setPlus(false)
      setDivide(false)
      setWasDivide(false)
      setDisplay(x => {
         return {
           ...x,
           show: display.show
         }
       })
    }  
}   
    
  function divition(){
    if(display.currentValue.length <= 0 && display.show !== ""){
      setDivide(true)
      setWasDivide(true)
      setPlus(false)
      setSub(false)
      setMuli(false)
      display.currentValue.push(parseFloat(display.show))
      clearDisplay()
    } else if(display.currentValue.length == 1 && !wasMuli && !wasPlus && !wasSub){
      setDivide(true)
      setWasDivide(true)
      setSub(false)
      setMuli(false)
      setPlus(false)
      setDisplay(x => {
        return {
          ...x,
          show:  display.currentValue[0] / parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasSub && display.show !== ""){
       setDivide(true)
       setSub(false)
       setMuli(false)
       setPlus(false)
       setWasDivide(true)
       setWasSub(false)
       setDisplay(x => {
         return {
           ...x,
           show: display.currentValue[0] - parseFloat(display.show),
           currentValue: []
         }
       })
    } else if(display.currentValue.length == 1 && wasPlus && display.show !== ""){
   setDivide(true)
   setSub(false)
   setPlus(false)
   setMuli(false)
   setWasPlus(false)
   setWasDivide(true)
   setDisplay(x => {
     return {
       ...x,
       show: display.currentValue[0] + parseFloat(display.show),
       currentValue: []
     }
   })
 } else if(display.currentValue.length == 1 && wasMuli && display.show !== ""){
    setDivide(true)
    setSub(false)
    setPlus(false)
    setMuli(false)
    setWasMuli(false)
    setWasDivide(true)
    setDisplay(x => {
      return {
        ...x,
        show: display.currentValue[0] * parseFloat(display.show),
        currentValue: []
      }
    })
    } else if(display.show === "" && display.currentValue.length <= 0){
       setDivide(true)
       setWasDivide(true)
       setSub(false)
       setPlus(false)
       setMuli(false)
       setDisplay(x => {
         return {
           ...x,
           show: ""
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasPlus){
      setDivide(true)
      setWasDivide(true)
      setSub(false)
      setPlus(false)
      setWasPlus(false)
      setMuli(false)
      setDisplay(x => {
         return {
           ...x,
           show: display.show
         }
       })
    } else if(display.show === "" && display.currentValue.length == 1 && wasSub){
      setDivide(true)
      setWasDivide(true)
      setSub(false)
      setWasSub(false)
      setPlus(false)
      setMuli(false)
      setDisplay(x => {
         return {
           ...x,
           show: display.show
         }
       }) 
  } else if(display.show === "" && display.currentValue.length == 1 && wasMuli){
      setDivide(true)
      setWasDivide(true)
      setSub(false)
      setPlus(false)
      setMuli(false)
      setWasMuli(false)
      setDisplay(x => {
         return {
           ...x,
           show: display.show
         }
       })
    }  
  } 
  
 
  
  
  function solution(){
    if(display.currentValue.length == 1 && wasPlus){
      setWasPlus(false)
      setWasSub(false)
      setWasMuli(false)
      setWasDivide(false)
       setDisplay(x => {
         return {
           ...x,
           show: display.currentValue[0] + parseFloat(display.show),
           currentValue: []
         }
       })
    } else if(display.currentValue.length == 1 && wasSub){
      setWasPlus(false)
      setWasSub(false)
      setWasMuli(false)
      setWasDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] - parseFloat(display.show),
          currentValue: []
        }
      })
    } else if(display.currentValue.length == 1 && wasMuli){
      setWasPlus(false)
      setWasSub(false)
      setWasMuli(false)
      setWasDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] * parseFloat(display.show),
          currentValue: []
        }
     })
   } else if(display.currentValue.length == 1 && wasDivide){
      setWasPlus(false)
      setWasSub(false)
      setWasMuli(false)
      setWasDivide(false)
      setDisplay(x => {
        return {
          ...x,
          show: display.currentValue[0] / parseFloat(display.show),
          currentValue: []
        }
      })
   }
  }
  
 console.log(display.currentValue)
  
  
  
  
  function clear(){
    setDisplay(prev => {
      return {
        ...prev,
        show: "",
        add: [],
        subtract: [],
        currentValue: []
      }
    })
    setPlus(false)
    setSub(false)
    setMuli(false)
    setDivide(false)
    setWasPlus(false)
    setWasSub(false)
    setWasMuli(false)
    setWasDivide(false)
    setNeg(false)
  }
  
  

  
  
  
  
  
  return (
    <div>
     
      <div className="calulator--container">
        <img className="apple--logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />
        <div className="operation--display">
          
        </div>
         <div id="display" className="display--container">
           {display.show === "" ? 0 : display.show}
           
        </div>
      <div className="keypad--container">
        
        <button className="clear--btn" onClick={clear}  id="clear">AC</button>
        <button className="numPad" onClick={addOne} id="one">1</button>
        <button className="numPad" onClick={addTwo} id="two">2</button> 
        <button className="numPad" onClick={addThree} id="three">3</button>
        <button className="numPad" onClick={addFour} id="four">4</button>
        <button className="numPad" onClick={addFive} id="five">5</button> 
        <button className="numPad" onClick={addSix} id="six">6</button>
        <button className="numPad" onClick={addSeven} id="seven">7</button>
        <button className="numPad" onClick={addEight} id="eight">8</button>
        <button className="numPad" onClick={addNine} id="nine">9</button>
        <button className="numPad" onClick={addZero} id="zero">0</button>
        <button className="operation--pad" onClick={setDecimalPoint} id="decimal">.</button>
        <button className="operation--pad" style={stylesDivide} onClick={divition} id="divide">/</button>
        <button className="operation--pad" style={stylesAdd} onClick={addition} id="add">+</button>
        <button className="operation--pad" style={stylesSub} onClick={subtract} id="subtract">-</button>
        <button className="operation--pad" style={stylesMuli} onClick={mulipcation} id="multiply">*</button>
        <button className="operation--pad" id="neg" onClick={makeNumberNegetive}>NEG</button>
        <button className="operation--pad" onClick={solution} id="equals">=</button>
        
      </div>
    </div>
      <p>designed and progarmmed by Kevin Torres</p>
    </div>
  )
}
export default App