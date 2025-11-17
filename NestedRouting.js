import React from 'react';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';

function Home() {
    return <h2 style={{ color: "purple" }}>Home Page</h2>;
}

function About() {
    return <h2 style={{ color: "purple" }}>About Page</h2>;
}

function Contact() {
    return <h2 style={{ color: "purple" }}>Contact Page</h2>;
}

function Products() {
    return (
        <>
            <h2>Products</h2>
            <nav>
                <Link to='Women'>Women</Link>&nbsp;&nbsp;
                <Link to='Men'>Men</Link>&nbsp;&nbsp;
            </nav>
            <Outlet />
        </>
    );
}

function Women() {
    return (
        <>
            <h2>Womens</h2>
            <ul>
                <li>Saree</li>
                <li>Kurta</li>
                <li>Shirts</li>
            </ul>
        </>
    );
}

function Men() {
    return (
        <>
            <h2>Men</h2>
            <ul>
                <li>Shirts</li>
                <li>Shervani</li>
                <li>T-Shirts</li>
            </ul>
        </>
    );
}

function App() {
    return (
        <div style={{ justifySelf: "center" }}>
            <BrowserRouter>
                <h1 style={{ color: "blue" }}>Nested Routing</h1>

                <nav>
                    <Link to='/'>Home</Link>&nbsp;&nbsp;
                    <Link to='/about'>About</Link>&nbsp;&nbsp;
                    <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
                    <Link to='/Products'>Products</Link>&nbsp;&nbsp;
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/Products' element={<Products />}>
                        <Route path='Women' element={<Women />} />
                        <Route path='Men' element={<Men />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;

