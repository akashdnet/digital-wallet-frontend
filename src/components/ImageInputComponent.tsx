import { useEffect, useState } from "react"
import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react"
import { useFileUpload } from "@/hooks/use-file-upload"
import { Button } from "@/components/ui/button"

interface Props {
  onFileHandle: (file: File | null) => void
  imageLink?: string | null
}

export default function ImageInputComponent({ onFileHandle, imageLink }: Props) {
  const maxSizeMB = 2
  const maxSize = maxSizeMB * 1024 * 1024

  
  const [currentImage, setCurrentImage] = useState<string | null>(imageLink || null)

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
  })

  const previewUrl = files[0]?.preview || null


  useEffect(() => {
    if (files[0]?.file) {
      onFileHandle(files[0].file as File)
      setCurrentImage(null) 
    } else {
      onFileHandle(null)
    }
  }, [files, onFileHandle])

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-input p-4 transition-colors data-[dragging=true]:bg-accent/50"
        >
          <input {...getInputProps()} className="sr-only" aria-label="Upload image file" />

          {previewUrl ? (

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                src={previewUrl}
                alt={files[0]?.file?.name || "Uploaded image"}
                className="mx-auto max-h-full rounded object-contain"
              />
            </div>
          ) : currentImage ? (
            

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                src={currentImage}
                alt="Existing image"
                className="mx-auto max-h-full rounded object-contain"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div className="mb-2 flex size-11 items-center justify-center rounded-full border bg-background">
                <ImageIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">Drop your image here</p>
              <p className="text-xs text-muted-foreground">
                SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)
              </p>
              <Button type="button" variant="outline" className="mt-4" onClick={openFileDialog}>
                <UploadIcon className="-ms-1 size-4 opacity-60" />
                Select image
              </Button>
            </div>
          )}
        </div>

        {(previewUrl || currentImage) && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="z-50 flex size-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              onClick={() => {
                if (previewUrl) {
                  removeFile(files[0]?.id)
                  onFileHandle(null)
                } else if (currentImage) {
                  setCurrentImage(null) 
                  onFileHandle(null)
                }
              }}
              aria-label="Remove image"
            >
              <XIcon className="size-4" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="flex items-center gap-1 text-xs text-destructive" role="alert">
          <AlertCircleIcon className="size-3" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  )
}
