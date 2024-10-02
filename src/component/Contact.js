const Contact = () => {
    return(
        <div>
            <h4 className="font-bold text-3xl p-4 m-4 text-center">Contact Page</h4>
            <form className="">
                <input type="text" className="border border-slate-500 p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-slate-500 p-2 m-2" placeholder="message" />
                <button className="border border-green-600 p-2 m-2 rounded-lg bg-green-600 text-white">Submit</button>
            </form>
        </div>
    )
}

export default Contact;