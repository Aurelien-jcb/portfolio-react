import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import ScrollButton from '../components/ScrollButton';


export const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0}/>
                <ScrollButton left={'/'} right={'/project-2'} />
            </div>
        </main>
    )
}
export const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1}/>
                <ScrollButton left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    )
}
export const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2}/>
                <ScrollButton left={'/project-2'} right={'/project-4'} />
            </div>
        </main>
    )
}
export const Project4 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={3}/>
                <ScrollButton left={'/project-3'} right={'/contact'} />
            </div>
        </main>
    )
}