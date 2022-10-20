import {
    Service
} from './service'
export function getMaplist(searchKey) {
    return Service({
        url: '/user/mapConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function updateMaplist(data) {
    return Service({
        url: '/user/mapConfig',
        method: 'post',
        data
    })
}
export function getMonsterList(searchKey) {
    return Service({
        url: '/user/monsterConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function getNpcList(searchKey) {
    return Service({
        url: '/user/npcConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function getTaskList(searchKey) {
    return Service({
        url: '/user/taskConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function getPetList(searchKey) {
    return Service({
        url: '/user/petConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function getSkillList(searchKey) {
    return Service({
        url: '/user/skillConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function getGoodsList(searchKey) {
    return Service({
        url: '/user/goodsConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}
export function getAwardList(searchKey) {
    return Service({
        url: '/user/awardConfig',
        method: 'get',
        params: {
            searchKey
        }
    })
}