// Elegant circular "FC" monogram logo — gold on navy, echoing the brand mark.
export const Logo = ({ className = "", light = false }) => {
  const nameColor = light ? "#F5F1E8" : "#0C2D4E";
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="brand-logo">
      <div
        className="relative flex h-11 w-11 items-center justify-center rounded-full border"
        style={{ backgroundColor: "#0C2D4E", borderColor: "#B8860B" }}
      >
        <span className="font-display text-lg font-medium leading-none" style={{ color: "#B8860B" }}>
          FC
        </span>
      </div>
      <div className="leading-tight">
        <span
          className="block font-display text-lg font-semibold tracking-wide"
          style={{ color: nameColor }}
        >
          Fernanda Caldeira
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: "#B8860B" }}>
          Advocacia
        </span>
      </div>
    </div>
  );
};

export default Logo;
