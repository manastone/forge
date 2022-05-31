import { FunctionComponent, useEffect, useRef, useState } from "react";
import { MenuStyle } from "./styled";

const ButtonDemo: FunctionComponent<any> = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const [classEl, setClassEl] = useState("menu");

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  // Position
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  const openAction = (event: any) => {
    if (props.disabled !== true) {
      if (ref.current.classList.contains("menu--is-open")) {
        // ref.current.classList.remove("menu--is-open");
        const update = classEl.replace("menu--is-open", "");
        setClassEl(update);
      } else {
        //ref.current.classList.add("menu--is-open");
        setClassEl(classEl + " menu--is-open");
      }
    }

    setRight(0);
    setLeft(event.pageX);
    setTop(event.pageY);
    setBottom(0);
  };

  window.onclick = function (event) {
    const eventPath: any = event.composedPath();

    console.log(event.composedPath());
    const dropdowns = document.getElementsByClassName("menu");

    // OK
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const el = dropdowns[i];
      if (ref.current.className !== el.className) {
        if (el.classList.contains("menu--is-open")) {
          el.classList.remove("menu--is-open");
        }
      }
    }

    let y;

    /**
     * STEP
     *
     * 1 = dans le menu
     * 2 = sur le menu
     * 3 = hors du menu
     */
    let action = 3;
    for (const indexPath in eventPath) {
      console.log(eventPath[indexPath].className);
      if (String(eventPath[indexPath].className).includes("menu-wrapper")) {
        console.log("Tu clique dans le menu");
        return (action = 1);
      }

      if (String(eventPath[indexPath].className).includes("menu-global")) {
        console.log("tu click sur un menu");
        return (action = 2);
      }
    }

    if (action === 3) {
      console.log("tu lcik hors des menu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const el = dropdowns[i];
        if (el.classList.contains("menu--is-open")) {
          el.classList.remove("menu--is-open");
        }
      }
    }

    // for (y = 0; y < eventClick.path.length; i++) {
    //   const cl = eventClick[i];
    //   console.log("cl", cl);
    //   //   const el = dropdowns[i];
    //   //   if (ref.current.className !== el.className) {
    //   //     if (el.classList.contains("menu--is-open")) {
    //   //       el.classList.remove("menu--is-open");
    //   //     }
    //   //   }
    // }

    // let useElIndex;
    // for (const index in dropdowns) {
    //   //console.log(dropdowns[index].className, ref.current.className);
    //   if (dropdowns[index].className !== ref.current.className) {
    //     dropdowns[index].classList.remove("menu--is-open");
    //     //console.log("HELLO", dropdowns[index].className, ref.current.className);
    //     //console.log("index", index);
    //     // const item = dropdowns[index].classList;
    //     // for (const [key, value] of Object.entries(dropdowns[index].classList)) {
    //     //   console.log(`${key}: ${value}`);
    //     // }
    //     // for (const indexClassList in ) {
    //     //   console.log(
    //     //     "classListItem",
    //     //     dropdowns[index].classList[indexClassList]
    //     //   );
    //     // }
    //     // console.log(item);
    //     // if (item.contains("menu--is-open")) {
    //     //   item.remove("menu--is-open");
    //     // }
    //     //console.log();
    //     //dropdowns[index].classList.remove("menu--is-open");
    //   }
    // }

    // const el: any = event;
    // let id = undefined;
    // let noClose = false;
    // console.log("onClick", open, event, event.clientX);

    // console.log("window onClick", dropdowns);
    // console.log("compare", dropdowns, ref);

    // Si tu click dans le menu alors tu ne le ferme pas
    // console.log("event path", el.path);
    // for (const property in el.path) {
    //   console.log(`${property}: ${el.path[property].className}`);
    //   if (el.path[property].className !== undefined) {
    //     if (el.path[property].className.includes("menu-wrapper")) {
    //       console.log("tu click dans le menu ");
    //       return (noClose = true);
    //     }
    //   }
    // }

    // if (!noClose) {
    //   let i;
    //   for (i = 0; i < dropdowns.length; i++) {
    //     const el = dropdowns[i];

    //     // if (el.classList.contains("menu--close-click")) {
    //     el.classList.remove("menu--is-open");
    //     // }
    //   }
    // }
    // if (el.path.includes("menu--is-open")) {
    //   console.log("tu click dans le menu donc on s en branle");
    // } else {
    // }
  };

  return (
    <div className="menu-global">
      <button onClick={(event) => openAction(event)}>Button</button>
      <MenuStyle
        className={classEl}
        open={open}
        right={right}
        left={left}
        top={top}
        bottom={bottom}
        ref={ref}
      >
        <div className="menu-wrapper">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
      </MenuStyle>
    </div>
  );
};

export default ButtonDemo;
