# Open google Chrome
function open {
    if [ -z "$1" ]; then
        # display usage if no parameters given
        echo "Usage: chromeIt <file_name>|<url>"
    else
        if [ -f "$1" ] ; then
            chrome --incognito $(pwd)/$1
        else
            chrome --incognito $1
        fi
    fi
}

alias chrome="open -a 'Google Chrome'"
