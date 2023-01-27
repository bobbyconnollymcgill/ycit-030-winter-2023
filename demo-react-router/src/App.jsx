import {
    Routes,
    Route,
    Link,
    Outlet,
    useParams,
    useNavigate,
} from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>This is the home screen</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

function Users() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Users</h1>
            <ul>
                <li>
                    <Link to="/users/1">User 1</Link>
                </li>
                <li>
                    <Link to="/users/2">User 2</Link>
                </li>
                <li>
                    <Link to="/users/3">User 3</Link>
                </li>
            </ul>
            <button
                onClick={() => {
                    // Programatically navigate to another route
                    navigate("/")
                }}
            >
                Go to Home
            </button>
            <Outlet />
        </div>
    )
}

function User() {
    const params = useParams()

    // console.log("params", params)

    return (
        <div>
            <h3>Selected user: {params.id}</h3>
        </div>
    )
}

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    )
}

export function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="users" element={<Users />}>
                    <Route path=":id" element={<User />} />
                </Route>
            </Routes>
        </div>
    )
}
