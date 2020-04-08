function initializeExampleElements()
{
    function iframeOnLoad(exampleElement, iframe, editor, applyButton, resetButton, desktopButton, mobileButton)
    {
        return function ()
        {
            initializeExampleElementIframe(exampleElement, iframe, editor, applyButton, resetButton, desktopButton, mobileButton);
        }
    }

    var exampleElements = document.getElementsByClassName("example");

    for (var i = 0; i < exampleElements.length; i++)
    {
        var exampleElement = exampleElements[i];

        var iframe = document.createElement("iframe");
        iframe.src = exampleElement.dataset.src;

        var textarea = document.createElement("textarea");

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "buttons are-large";

        var applyButton = document.createElement("button");
        applyButton.className = "button is-success";
        applyButton.innerHTML = "Apply";

        var resetButton = document.createElement("button");
        resetButton.className = "button is-danger";
        resetButton.innerHTML = "Reset";

        var spacer = document.createElement("div");
        spacer.style.flex = "1";

        var desktopButton = document.createElement("button");
        desktopButton.className = "button is-light";
        desktopButton.innerHTML = "Desktop";

        var mobileButton = document.createElement("button");
        mobileButton.className = "button";
        mobileButton.innerHTML = "Mobile";

        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(resetButton);
        buttonContainer.appendChild(spacer);
        buttonContainer.appendChild(desktopButton);
        buttonContainer.appendChild(mobileButton);

        exampleElement.appendChild(iframe);
        exampleElement.appendChild(textarea);
        exampleElement.appendChild(buttonContainer);

        var editor = CodeMirror.fromTextArea(textarea,
        {
            lineNumbers: true,
            theme: "twilight"
        });

        iframe.onload = iframeOnLoad(exampleElement, iframe, editor, applyButton, resetButton, desktopButton, mobileButton);

    }
}

function initializeExampleElementIframe(exampleElement, iframe, editor, applyButton, resetButton, desktopButton, mobileButton)
{
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    iframe.style.width = "100%";
    iframe.frameborder = "0";
    iframe.scrolling = "no";
    iFrameResize({}, iframe);

    editor.setValue(trimUnnecessaryIndentation(iframe.contentWindow.document.body.innerHTML));

    applyButton.addEventListener('click', function ()
    {
        iframe.contentWindow.document.body.innerHTML = editor.getValue();
    });

    resetButton.addEventListener('click', function ()
    {
        iframe.contentWindow.location.reload();

        editor.setValue(trimUnnecessaryIndentation(iframe.contentWindow.document.body.innerHTML));
    });

    desktopButton.addEventListener('click', function ()
    {
        iframe.style.maxWidth = '100%';
        iframe.style.minWidth = '100%';

        desktopButton.classList.add("is-light");
        mobileButton.classList.remove("is-light");
    });

    mobileButton.addEventListener('click', function ()
    {
        iframe.style.maxWidth = '768px';
        iframe.style.minWidth = '768px';

        mobileButton.classList.add("is-light");
        desktopButton.classList.remove("is-light");
    });

}

function trimUnnecessaryIndentation(string)
{
    var lines = string.split('\n');
    var extraIndentation = 0;
    var indentationCalculated = false;

    var res = "";

    for (var i = 0; i < lines.length; i++)
    {
        var line = lines[i];

        if (!indentationCalculated)
        {
            if (line.trim().length != 0)
            {
                indentationCalculated = true;
                extraIndentation = line.length - line.trimStart().length;
            }
        }

        if (indentationCalculated)
        {
            res += line.substr(extraIndentation) + '\n';
        }
    }


    return res.trimEnd();
}