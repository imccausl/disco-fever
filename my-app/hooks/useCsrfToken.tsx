import React from 'react'


function useCookie(name: string) {
    const [cookieStateValue, setCookieValue] = React.useState<string | undefined>(undefined)

    React.useEffect(() => {
    let cookieValue = undefined;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
        return setCookieValue(cookieValue)
    }, [name])

    return cookieStateValue
}


export function useCsrfToken() {
   return  useCookie('csrftoken');
}
