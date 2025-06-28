"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { User, Camera, Upload, Trash2, Edit3, X, Shield } from "lucide-react"
import "../styles/profile-photo.css"

interface ProfilePhotoManagerProps {
  onPhotoChange?: (photoUrl: string | null) => void
}

export default function ProfilePhotoManager({ onPhotoChange }: ProfilePhotoManagerProps) {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [showAdminNotification, setShowAdminNotification] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Load photo from localStorage on component mount
  useEffect(() => {
    const savedPhoto = localStorage.getItem("profilePhoto")
    if (savedPhoto) {
      setProfilePhoto(savedPhoto)
      onPhotoChange?.(savedPhoto)
    }

    // Check if admin mode was previously enabled
    const savedAdminMode = localStorage.getItem("adminMode")
    if (savedAdminMode === "true") {
      setIsAdminMode(true)
    }
  }, [onPhotoChange])

  // Admin mode toggle with secret key combination
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Secret combination: Ctrl + Shift + X
      if (e.ctrlKey && e.shiftKey && e.key === "X") {
        e.preventDefault()
        const newAdminMode = !isAdminMode
        setIsAdminMode(newAdminMode)

        // Save admin mode state
        localStorage.setItem("adminMode", newAdminMode.toString())

        // Show notification
        setShowAdminNotification(true)
        setTimeout(() => setShowAdminNotification(false), 3000)

        // Close edit menu if admin mode is disabled
        if (!newAdminMode) {
          setIsEditing(false)
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isAdminMode])

  // Create - Upload new photo
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB")
        return
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file")
        return
      }

      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setProfilePhoto(result)
        onPhotoChange?.(result)
        setIsUploading(false)
        setIsEditing(false)

        // Save to localStorage for persistence
        localStorage.setItem("profilePhoto", result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Update - Replace existing photo
  const handleUpdatePhoto = () => {
    fileInputRef.current?.click()
  }

  // Delete - Remove photo
  const handleDeletePhoto = () => {
    setProfilePhoto(null)
    onPhotoChange?.(null)
    localStorage.removeItem("profilePhoto")
    setIsEditing(false)
  }

  const toggleEditMode = () => {
    if (isAdminMode) {
      setIsEditing(!isEditing)
    }
  }

  return (
    <div className="profile-photo-container">
      {/* Admin Mode Notification */}
      {showAdminNotification && (
        <div className={`admin-notification ${isAdminMode ? "admin-enabled" : "admin-disabled"}`}>
          <Shield className="notification-icon" />
          <span>Admin Mode {isAdminMode ? "Enabled" : "Disabled"}</span>
        </div>
      )}

      <div className="profile-photo-wrapper">
        {/* Photo Display */}
        <div className="avatar-ring">
          <div className="avatar-inner">
            {profilePhoto ? (
              <img src={profilePhoto || "/placeholder.svg"} alt="Profile" className="profile-image" />
            ) : (
              <User className="avatar-icon" />
            )}
          </div>
        </div>

        {/* Edit Controls - Only show in admin mode */}
        {isAdminMode && (
          <div className="photo-controls">
            <button onClick={toggleEditMode} className="control-btn edit-btn" title="Edit Photo (Admin Mode)">
              {isEditing ? <X className="control-icon" /> : <Edit3 className="control-icon" />}
            </button>
          </div>
        )}

        {/* Admin Mode Indicator */}
        {isAdminMode && (
          <div className="admin-indicator" title="Admin Mode Active">
            <Shield className="admin-shield-icon" />
          </div>
        )}

        {/* Edit Menu - Only show in admin mode */}
        {isAdminMode && isEditing && (
          <div className="edit-menu">
            <div className="edit-menu-content">
              <h3 className="edit-menu-title">
                <Shield className="menu-shield-icon" />
                Admin: Manage Profile Photo
              </h3>

              <div className="edit-actions">
                {/* Upload/Update Button */}
                <button onClick={handleUpdatePhoto} className="action-btn upload-btn" disabled={isUploading}>
                  {profilePhoto ? <Camera className="action-icon" /> : <Upload className="action-icon" />}
                  {isUploading ? "Uploading..." : profilePhoto ? "Update Photo" : "Upload Photo"}
                </button>

                {/* Delete Button - only show if photo exists */}
                {profilePhoto && (
                  <button onClick={handleDeletePhoto} className="action-btn delete-btn">
                    <Trash2 className="action-icon" />
                    Remove Photo
                  </button>
                )}
              </div>

              <div className="upload-info">
                <p>Supported formats: JPG, PNG, GIF</p>
                <p>Max size: 5MB</p>
              </div>

              <div className="admin-info">
                <p>🔐 Admin Mode Active</p>
                <p>Press Ctrl+Shift+A to toggle</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden-file-input"
      />
    </div>
  )
}
