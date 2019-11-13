
class List extends React.Component {
    render() {
        return (
            <div>List1</div>
        )
    }
}

// higherOrderComponent
const HOC = (props) => {
    return (Component) => {
        return (Component2) => {
            return () => {
                return (
                    <div>
                        <Component {...props} />
                        <Component2 {...props} />
                    </div>
                )

            }
        }
    }
}
const store = {
    skill: '123',
    ajax(){},
    getCookie(){}
}
const HOCList = HOC(store)(List)(List)
const HOCList2 = HOC(store)(List)(List)

const template = <ul>
    <HOCList2/>
    <hr />
    <HOCList />
</ul>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)