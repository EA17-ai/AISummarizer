import { useState } from "react"
import { linkIcon,copy,loader,tick } from "../assets"
import { useLazyGetSummaryQuery } from "../services/article"

const Demo = () => {
    const [copied, setCopied] = useState(false);
    const [article,setArticle]=useState({
        url:"",
        summary:""
    })
    const handleCopy=()=>{
        setCopied(true)

        navigator.clipboard.writeText(article.summary)

        

    }
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        console.log("name",value)
        setArticle((prevValue)=>{
            return {...prevValue,[name]:value}
        })

    }
    const handleSubmit=async(event)=>{
        event.preventDefault()
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
          const newArticle = { ...article, summary: data.summary };
          setArticle(newArticle);
          console.log(newArticle)
        }
    }
  return (
<section className="mt-12 sm:ml-[100px] lg-[225px] xl:ml-[500px]  md:ml-[200px] max-w-4xl w-full ">
<div>
    <form className="relative flex justify-center shadow-lg rounded-xl py-2 shadow-white border-2 items-center" onSubmit={handleSubmit}>
        <img src={linkIcon} alt="link icon" className="pr-20 ml-10" />
        <input type="url" name="url" placeholder="Enter a url " className="shadow-xl w-3/4 p-2 rounded-lg placeholder-orange-600" value={article.url} onChange={handleChange} required  />
        <div className="ml-auto mr-20 "><button type="submit" className="bg-black text-white ml-10 px-2 py-1 rounded-full peer-focus:bg-slate-800" >Submit</button></div>
    </form>
        {/* Browse URL History */}
    </div>

    {isFetching ? <img className="flex justify-center items-center" src={loader} alt="loader"/>
    :(
        article.summary && (
            <div className="flex flex-wrap flex-row container mt-10 border-2 border-slate-500 shadow-2xl px-5 py-10 rounded-3xl  ">
      <div className="ml-auto">
      
        <button className={`px-2 py-1 border-2 rounded-full ${copied ? 'bg-black text-white' : ''}`}
               onClick={handleCopy} >
            {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div>
      <p className="mt-10" >
        {article.summary}
        </p>
      </div>
        
      </div>
 
        )
    )
    
    
    }



    </section>
  )
}

export default Demo
 