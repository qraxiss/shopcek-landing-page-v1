import { Nav } from './nav'
import { Logo } from './logo'
export function Header() {
    return (
        <header className="header container-outside">
            <Logo></Logo>
            <Nav></Nav>
        </header>
    )
}
