import Item from "./components/Item";
import Questions from "./data/data";
function App() {
  return (
    <>
      <div className="flex justify-center w-full h-full">
        <div className="bg-white w-50 h-30">
              <div className="container">
                    <div className="heading">
                      <h1>Questions And Answers About Login</h1>
                    </div>
                    <div className="content">
                         {
                           Questions.map((question,i)=>{
                             return <Item q={question.q} ans={question.ans} key={i}/>
                           })
                         }
                    </div>
              </div>
      </div>
      </div>
      
    </>
  );
}

export default App;
