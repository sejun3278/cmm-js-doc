import { MutableRefObject } from "react";
import {
  HalfDragComponentsWrapper,
  HalfDragControllerWrapper,
  HalfDragWrapper,
  ScorllBar,
} from "./half-drag.styles";
// import { breakPoints } from "src/commons/styles/responsiveBreakPoints";

import CommonsHooksComponents from "src/main/commonsComponents/hooks";
import { IProps } from "./half-drag.container";

interface UIProps {
  startDrag: () => void;
  leftRef: MutableRefObject<HTMLDivElement>;
  controllerRef: MutableRefObject<HTMLDivElement>;
  rightRef: MutableRefObject<HTMLDivElement>;
  startHalfScroll: boolean;
}

export default function HalfDragUIPage({
  LeftComponent,
  RightComponent,
  startDrag,
  leftRef,
  controllerRef,
  rightRef,
  startHalfScroll,
}: IProps & UIProps) {
  const { componentRender } = CommonsHooksComponents();

  return (
    <HalfDragWrapper isStartingHalfScroll={startHalfScroll}>
      {LeftComponent !== undefined && (
        <HalfDragComponentsWrapper
          className="_halfDrag_leftPage_"
          ref={leftRef}
        >
          {componentRender(LeftComponent)}
        </HalfDragComponentsWrapper>
      )}

      {LeftComponent !== undefined && RightComponent !== undefined && (
        <HalfDragControllerWrapper
          className="_halfDrag_controller_"
          isStartingHalfScroll={startHalfScroll}
          onMouseDown={startDrag}
          ref={controllerRef}
        >
          <ScorllBar className="_scroll_bar_">
            <img
              alt=""
              src="/images/modules/half-drag/half_drag_row.png"
              className="_scroll_resize_icon_"
            />
          </ScorllBar>
        </HalfDragControllerWrapper>
      )}

      {RightComponent && (
        <HalfDragComponentsWrapper
          className="_halfDrag_rightPage_"
          ref={rightRef}
        >
          {componentRender(RightComponent)}
        </HalfDragComponentsWrapper>
      )}
    </HalfDragWrapper>
  );
}