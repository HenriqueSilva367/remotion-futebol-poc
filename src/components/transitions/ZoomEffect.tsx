import { useCurrentFrame, interpolate } from 'remotion';

type ZoomEffectProps = {
  zoomStartFrame: number;
  zoomEndFrame: number;
  zoomFrom: number;
  zoomTo: number;
  startFrom: number; 
  children: React.ReactNode;
};

export const ZoomEffect: React.FC<ZoomEffectProps> = ({
  zoomStartFrame,
  zoomEndFrame,
  zoomFrom,
  zoomTo,
  startFrom,
  children,
}) => {
  const frame = useCurrentFrame();

  const relativeFrame = frame - startFrom;

  const zoomLocalStart = zoomStartFrame - startFrom;
  const zoomLocalEnd = zoomEndFrame - startFrom;

  const scale = interpolate(
    relativeFrame,
    [zoomLocalStart, zoomLocalEnd],
    [zoomFrom, zoomTo],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transform: `scale(${scale})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  );
};
