
Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\geraw\sLogicAndSetTheory2026\images\equivalence_intuition.png"
$destPath = "c:\Users\geraw\sLogicAndSetTheory2026\images\equivalence_intuition_cropped.png"

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source file not found: $sourcePath"
    exit 1
}

$img = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $img.Width
$height = $img.Height

# Find Top
$top = 0
for ($y = 0; $y -lt $height; $y++) {
    $isEmpty = $true
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $img.GetPixel($x, $y)
        # Check if pixel is not white (allowing slight noise)
        if ($pixel.R -lt 250 -or $pixel.G -lt 250 -or $pixel.B -lt 250) {
            $isEmpty = $false
            break
        }
    }
    if (-not $isEmpty) {
        $top = $y
        break
    }
}

# Find Bottom
$bottom = $height - 1
for ($y = $height - 1; $y -ge 0; $y--) {
    $isEmpty = $true
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $img.GetPixel($x, $y)
        if ($pixel.R -lt 250 -or $pixel.G -lt 250 -or $pixel.B -lt 250) {
            $isEmpty = $false
            break
        }
    }
    if (-not $isEmpty) {
        $bottom = $y
        break
    }
}

# Add a small padding if possible
$padding = 10
$top = [Math]::Max(0, $top - $padding)
$bottom = [Math]::Min($height - 1, $bottom + $padding)
$newHeight = $bottom - $top + 1

if ($newHeight -le 0) {
    Write-Error "Calculated height is invalid."
    $img.Dispose()
    exit 1
}

Write-Host "Cropping from Y=$top to Y=$bottom (Height: $newHeight)"

$rect = New-Object System.Drawing.Rectangle(0, $top, $width, $newHeight)
$croppedImg = $img.Clone($rect, $img.PixelFormat)

$img.Dispose()

$croppedImg.Save($destPath)
$croppedImg.Dispose()

Write-Host "Cropped image saved to $destPath"
