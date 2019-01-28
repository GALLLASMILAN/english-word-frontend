import pages from './data';

export function getPagesForRole(role) {
    return pages.filter(page => page.role.indexOf(role) !== -1);
}

export function getPagesToLeftMenu(role) {
    return getPagesForRole(role).filter(page => page.menu === 'left');
}

export function getPagesToRightMenu(role) {
    return getPagesForRole(role).filter(page => page.menu === 'right');
}

export function hasRoleToPage(role, url) {
    return (getPagesForRole(role).filter(page => page.url === url) !== []);
}

export function getPageByName(name) {
    return pages.find(page => page.name === name);
}