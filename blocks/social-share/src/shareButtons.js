import { useState } from "@wordpress/element";
import SortableComponent from "./SortableComponent";
import { __ } from "@wordpress/i18n";
const { EBIconPicker } = window.EBControls;

export default function SocialProfiles({
    onProfileAdd,
    profiles: propProfiles,
}) {
    const [profiles, setProfiles] = useState(propProfiles || []);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [color, setColor] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [separatorColor, setSeparatorColor] = useState("");
    const [iconText, setIconText] = useState("");

    const onSelectIcon = (selectedIcon) => {
        // When a social profile icon is selected, store it in state and pass it
        // to the callback function

        if (selectedIcon) {
            let newProfiles = [
                ...profiles,
                {
                    icon: selectedIcon,
                    isExpanded: false,
                },
            ];

            setProfiles(newProfiles);
            setSelectedIcon(selectedIcon);
            onProfileAdd(newProfiles);
        }
    };

    const onDeleteProfile = (position) => {
        // Remove clicked social profile, store rest of the
        // profiles in state, and pass deleted profile name to the callback function
        let newProfiles = [...profiles];
        newProfiles.splice(position, 1);

        setProfiles(newProfiles);
        onProfileAdd(newProfiles);
    };

    const onProfileClick = (icon) => {
        // When a profile is clicked, expand/collapse link input form and
        // store profile icon name, url in state
        let newProfiles = [...profiles];
        let newIconText = iconText;
        let newColor = color;
        let newBackgroundColor = backgroundColor;

        newProfiles = newProfiles.map((profile) => {
            if (profile.icon === icon) {
                newIconText = profile.iconText;
                newColor = profile.color;
                return { ...profile, isExpanded: !profile.isExpanded };
            }

            return { ...profile, isExpanded: false };
        });

        setProfiles(newProfiles);
        setSelectedIcon(icon);
        setIconText(newIconText);
        setColor(newColor);
        setBackgroundColor(newBackgroundColor);
    };

    const onIconTextChange = (iconText, index) => {
        let newProfiles = [...profiles];
        newProfiles[index].iconText = iconText;

        setProfiles(newProfiles);
        onProfileAdd(newProfiles);
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        // Rearrange profiles array after drag and drop, pass
        // updated array to edit view
        const newProfiles = [...profiles];
        newProfiles.splice(newIndex, 0, newProfiles.splice(oldIndex, 1)[0]);

        setProfiles(newProfiles);
        onProfileAdd(newProfiles);
    };

    const onColorChange = (color, index) => {
        let newProfiles = [...profiles];
        newProfiles[index].color = color;

        setProfiles(newProfiles);
        onProfileAdd(newProfiles);
    };

    const onBackgroundColorChange = (bgColor, index) => {
        let newProfiles = [...profiles];
        newProfiles[index].backgroundColor = bgColor;

        setProfiles(newProfiles);
        onProfileAdd(newProfiles);
    };

    const onSeparatorColorChange = (separatorColor, index) => {
        let newProfiles = [...profiles];
        newProfiles[index].separatorColor = separatorColor;

        setProfiles(newProfiles);
        onProfileAdd(newProfiles);
    };

    return (
        <div>
            <style>{`

      li.drag-helper .iconLbl{
        color: #5f5f5f;
        padding-bottom: 5px;
        display: block;
      }

      li.drag-helper .input_wrapp{
        display: flex;
        align-items:center;
      }

      li.drag-helper .save-button{
        margin:0;
        padding: 4px;
        cursor:pointer;
      }

      li.drag-helper .social-link-input{
        margin: 0;
        flex: 1;
        padding: 0px 5px;
      }

      .socialBarsLabel{
        display:block;
        padding: 15px 0 5px;
        cursor:default;
      }


      `}</style>

            <EBIconPicker
                // icons={{ fontAwesome: iconList }}
                // disableDashicon={true}
                value={selectedIcon || null}
                onChange={onSelectIcon}
                title={__("Social Media", "essential-blocks")}
            />

            {profiles.length > 0 && (
                <label className="socialBarsLabel">
                    <i>
                        {__(
                            "Click on the social bars below to expand more options",
                            "essential-blocks"
                        )}
                    </i>
                </label>
            )}

            <SortableComponent
                profiles={profiles}
                onProfileClick={onProfileClick}
                onDeleteProfile={onDeleteProfile}
                selectedIcon={selectedIcon}
                iconText={iconText}
                onIconTextChange={onIconTextChange}
                onProfileAdd={onProfileAdd}
                onSortEnd={onSortEnd}
                onColorChange={onColorChange}
                onBackgroundColorChange={onBackgroundColorChange}
                onSeparatorColorChange={onSeparatorColorChange}
            />
        </div>
    );
}
