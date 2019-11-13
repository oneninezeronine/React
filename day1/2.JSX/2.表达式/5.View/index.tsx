(() => {
    // View
    const template = <div>
        {(()=>{
            return data
        })()}
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();