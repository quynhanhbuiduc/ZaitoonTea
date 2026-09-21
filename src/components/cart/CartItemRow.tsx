import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../../types/cart';
import { formatVND } from '../../utils/formatters';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="flex gap-3.5 py-4 border-b border-slate-100 last:border-b-0 items-center">
      {/* Product image */}
      <img
        src={item.product.thumbnail}
        alt={item.product.name}
        className="w-16 h-16 object-cover rounded-xl border border-slate-200 shrink-0"
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
          {item.product.name}
        </h4>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Quy cách: <span className="font-semibold text-emerald-800">{item.selectedPackaging}</span>
        </p>
        <p className="text-xs font-bold text-slate-900 mt-1">
          {formatVND(item.unitPrice)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center border border-slate-200 rounded-full bg-white shadow-xs">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 text-slate-500 hover:text-emerald-700 transition-colors"
              aria-label="Giảm số lượng"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-2 text-xs font-bold text-slate-900 min-w-[20px] text-center">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 text-slate-500 hover:text-emerald-700 transition-colors"
              aria-label="Tăng số lượng"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors ml-auto rounded-full hover:bg-rose-50"
            title="Xóa khỏi giỏ"
            aria-label="Xóa sản phẩm"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
