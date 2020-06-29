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
        exampleElement.classList.add("d-flex");
        exampleElement.classList.add("flex-column");

        var onlyCode = exampleElement.classList.contains("only-code");
        var side = exampleElement.classList.contains("side");

        var iframe = document.createElement("iframe");
        iframe.src = exampleElement.dataset.src;

        var textarea = document.createElement("textarea");

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "d-flex";

        var applyButton = document.createElement("button");
        applyButton.className = "btn btn-success m-1";
        applyButton.innerHTML = "Apply Changes";

        var resetButton = document.createElement("button");
        resetButton.className = "btn btn-danger reset-button m-1";
        resetButton.innerHTML = "Reset";

        var spacer = document.createElement("div");
        spacer.style.flex = "1";
        /*
        spacer.innerHTML = "<div>This code is editable!<div>";
        spacer.style.display = "flex";
        spacer.style.alignItems = "center";
        spacer.style.justifyContent = "center";
        */

        var desktopButton = document.createElement("button");
        desktopButton.className = "btn btn-light m-1";
        desktopButton.innerHTML = "Desktop";

        var mobileButton = document.createElement("button");
        mobileButton.className = "btn btn-dark m-1";
        mobileButton.innerHTML = "Mobile";


        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(resetButton);
        buttonContainer.appendChild(spacer);
        buttonContainer.appendChild(desktopButton);
        buttonContainer.appendChild(mobileButton);

        
        exampleElement.appendChild(iframe);
        exampleElement.appendChild(textarea);
        exampleElement.appendChild(buttonContainer);

        if (side)
        {
            exampleElement.classList.add("side");
        }

        var editor = CodeMirror.fromTextArea(textarea,
        {
            lineNumbers: true,
            lineWrapping: true,
            readOnly: onlyCode,
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
    });

    desktopButton.addEventListener('click', function ()
    {
        iframe.style.maxWidth = '100%';
        iframe.style.minWidth = '100%';

        desktopButton.classList.add("btn-light");
        desktopButton.classList.remove("btn-dark");
        mobileButton.classList.add("btn-dark");
        mobileButton.classList.remove("btn-light");
    });

    mobileButton.addEventListener('click', function ()
    {
        iframe.style.maxWidth = '768px';
        iframe.style.minWidth = '0px';

        mobileButton.classList.add("btn-light");
        mobileButton.classList.remove("btn-dark");
        desktopButton.classList.add("btn-dark");
        desktopButton.classList.remove("btn-light");
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