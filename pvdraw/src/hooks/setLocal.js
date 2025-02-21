function setLocal(key,value)
{
    localStorage.setItem(`${key}`,JSON.stringify(value))
}

export {setLocal}